from __future__ import annotations

import subprocess
from pathlib import Path

from fastapi import FastAPI
from starlette.exceptions import HTTPException as StarletteHTTPException

PROJECT_ROOT = Path(__file__).resolve().parent
DEPLOY_SCRIPT = PROJECT_ROOT / "deploy-github.sh"

app = FastAPI(title="Octopus Landing Service")


def _git_is_clean() -> bool:
    result = subprocess.run(
        ["git", "status", "--porcelain"],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        detail = result.stderr.strip() or "git status failed"
        raise StarletteHTTPException(status_code=500, detail=detail)
    return result.stdout.strip() == ""


@app.get("/internal/api/health")
async def health() -> dict[str, str]:
    return {"service": "octopus-landing", "status": "ok"}


@app.get("/internal/api/deploy/status")
async def deploy_status() -> dict[str, object]:
    script_present = DEPLOY_SCRIPT.is_file()
    clean = _git_is_clean()
    return {
        "script_present": script_present,
        "clean": clean,
        "can_deploy": script_present and clean,
    }


@app.post("/internal/api/deploy/github")
async def deploy_github() -> dict[str, object]:
    if not _git_is_clean():
        raise StarletteHTTPException(status_code=409, detail="检测到未提交的修改，请先点击「保存修改」后再部署。")
    if not DEPLOY_SCRIPT.is_file():
        raise StarletteHTTPException(status_code=500, detail="deploy-github.sh 不存在")

    result = subprocess.run(
        ["bash", str(DEPLOY_SCRIPT)],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        detail = result.stderr.strip() or result.stdout.strip() or "部署失败"
        raise StarletteHTTPException(status_code=500, detail=detail)
    return {
        "ok": True,
        "stdout": result.stdout,
        "stderr": result.stderr,
    }
