#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

npm install
npm run build

rm -rf frontend/dist
mkdir -p frontend/dist
cp -R dist/. frontend/dist/
