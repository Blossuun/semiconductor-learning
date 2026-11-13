---
name: task
description: TASKS.md의 작업을 1개 또는 여러 개 수행한다
disable-model-invocation: true
argument-hint: [T-번호 ... (생략하면 다음 미완료 작업 1개)]
allowed-tools: Bash(node .claude/scripts/done.mjs *) Bash(npm run build)
---

작업 번호: $ARGUMENTS
(비어 있으면 세션 시작 시 안내된 "다음 미완료 작업" 1개만 수행한다.)

## 작업 1개의 절차
1. 세션 시작 안내에 없는 번호면 `Grep`으로 TASKS.md에서 그 번호의 한 줄만 찾는다. TASKS.md 전체를 읽지 않는다.
2. 그 줄의 "읽을 파일"만 읽는다. "없음"이면 아무 파일도 읽지 않는다. 이 세션에서 이미 읽은 파일은 다시 읽지 않는다.
3. 바꿀 파일이 3개 이상이면 파일 목록만 제시하고 승인을 기다린다.
4. 구현한다. 완료 기준을 충족하는 최소한만 만든다.
5. `node .claude/scripts/done.mjs T-번호`로 완료 표시한다.

## 번호가 여러 개일 때
- 적힌 순서대로 하나씩 위 절차를 수행한다. 작업 사이에 보고하거나 멈추지 않는다.
- 작업 내용이 `/term ...` 또는 `/lesson ...`이면 `.claude/skills/term/SKILL.md` 또는 `.claude/skills/lesson/SKILL.md`를 한 번만 읽고 그 절차를 따른다.
- 한 작업이 실패하거나 승인이 필요하면 그 자리에서 멈추고, 남은 번호를 알린다.

## 마무리
- 수행한 작업 중 코드 작업(유형 A, B, E)이 있으면 `npm run build`를 마지막에 1회만 실행한다. 콘텐츠 작업(유형 C, D)만 했으면 빌드하지 않는다.
- 보고: 작업마다 한 줄(번호와 한 일), 그다음 사용자가 확인할 방법 한 줄.

커밋은 하지 않는다. 지정되지 않은 작업을 이어서 시작하지 않는다.