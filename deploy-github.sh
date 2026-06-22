#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

remote="${LANDING_GITHUB_REMOTE:-origin}"
branch="${LANDING_GITHUB_BRANCH:-main}"

if [ -n "$(git status --porcelain)" ]; then
  echo "workspace is dirty; save changes before deploying" >&2
  exit 1
fi

npm run build

git push "$remote" HEAD:"$branch"
