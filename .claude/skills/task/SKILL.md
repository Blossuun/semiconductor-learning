---
name: task
description: TASKS.md의 작업 1개를 수행한다
disable-model-invocation: true
argument-hint: [T-번호 (생략하면 다음 미완료 작업)]
allowed-tools: Bash(node .claude/scripts/done.mjs *) Bash(npm run build)
---

작업 번호: $ARGUMENTS
(비어 있으면 세션 시작 시 안내된 "다음 미완료 작업"을 수행한다.)

1. 번호가 주어졌고 세션 시작 안내와 다르면 `Grep`으로 TASKS.md에서 그 번호의 한 줄만 찾는다. TASKS.md 전체를 읽지 않는다.
2. 그 줄의 "읽을 파일"만 읽는다. "없음"이면 아무 파일도 읽지 않고 바로 작성한다.
3. 바꿀 파일이 3개 이상이면 파일 목록만 제시하고 승인을 기다린다.
4. 구현한다. 완료 기준을 충족하는 최소한만 만든다.
5. 코드 작업(유형 A, B, E)이면 `npm run build`를 1회 실행해 확인한다. 콘텐츠 작업(유형 C, D)은 빌드하지 않는다.
6. `node .claude/scripts/done.mjs T-번호`로 완료 표시한다.
7. 3줄로 보고하고 멈춘다: 한 일 / 사용자가 확인할 방법 / 다음 작업 번호.

커밋은 하지 않는다. 다음 작업을 이어서 시작하지 않는다.
