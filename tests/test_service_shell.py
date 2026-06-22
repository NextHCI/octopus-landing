from __future__ import annotations

import subprocess
from pathlib import Path

from fastapi.testclient import TestClient

import standalone_app


def test_health_returns_service_name() -> None:
    client = TestClient(standalone_app.app)

    response = client.get("/internal/api/health")

    assert response.status_code == 200
    assert response.json() == {"service": "octopus-landing", "status": "ok"}


def test_deploy_status_reports_script_and_clean_state(monkeypatch) -> None:
    monkeypatch.setattr(standalone_app, "_git_is_clean", lambda: True)
    monkeypatch.setattr(standalone_app, "DEPLOY_SCRIPT", Path("/tmp/deploy-github.sh"))
    monkeypatch.setattr(Path, "is_file", lambda self: str(self) == "/tmp/deploy-github.sh")
    client = TestClient(standalone_app.app)

    response = client.get("/internal/api/deploy/status")

    assert response.status_code == 200
    assert response.json()["can_deploy"] is True
    assert response.json()["clean"] is True
    assert response.json()["script_present"] is True


def test_deploy_refuses_dirty_workspace(monkeypatch) -> None:
    monkeypatch.setattr(standalone_app, "_git_is_clean", lambda: False)
    client = TestClient(standalone_app.app)

    response = client.post("/internal/api/deploy/github")

    assert response.status_code == 409
    assert "保存修改" in response.text


def test_deploy_runs_script_when_workspace_is_clean(monkeypatch) -> None:
    calls = []

    def fake_run(cmd, cwd, capture_output, text, check):
        calls.append(
            {
                "cmd": cmd,
                "cwd": cwd,
                "capture_output": capture_output,
                "text": text,
                "check": check,
            }
        )
        return subprocess.CompletedProcess(cmd, 0, stdout="pushed\n", stderr="")

    monkeypatch.setattr(standalone_app, "_git_is_clean", lambda: True)
    monkeypatch.setattr(standalone_app, "DEPLOY_SCRIPT", Path("/tmp/deploy-github.sh"))
    monkeypatch.setattr(Path, "is_file", lambda self: str(self) == "/tmp/deploy-github.sh")
    monkeypatch.setattr(subprocess, "run", fake_run)
    client = TestClient(standalone_app.app)

    response = client.post("/internal/api/deploy/github")

    assert response.status_code == 200
    assert response.json()["ok"] is True
    assert response.json()["stdout"] == "pushed\n"
    assert calls[0]["cmd"] == ["bash", str(standalone_app.DEPLOY_SCRIPT)]
    assert calls[0]["cwd"] == standalone_app.PROJECT_ROOT
