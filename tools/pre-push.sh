#!/bin/bash
# 배포 게이트(GATES.md). SKIP_GATE=1 git push 로 건너뜀
[ -n "$SKIP_GATE" ] && exit 0
cd "$(git rev-parse --show-toplevel)" && node tools/gate.mjs --quick || { echo "게이트 실패 → push 중단 (gate/REPORT.md)"; exit 1; }
