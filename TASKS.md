# 작업 목록

사용법: 새 세션에서 `/task` 입력 → 다음 미완료 작업 1개 수행 → 직접 커밋 → `/clear`.
특정 작업은 `/task T-05`. 용어 추가는 `/term 주제`, 레슨 본문은 `/lesson 주제`.

유형: A 뼈대 / B 공용 컴포넌트 / C 데이터 / D 레슨 콘텐츠 / E 배포
모델: F = Fable 무료 기간에 우선 처리 (디자인·설계 품질이 중요) / S = Sonnet, effort low로 충분

## 0. 사용자가 직접 (토큰 0)
프로젝트 폴더의 PowerShell에서 위에서부터 순서대로 실행한다.

- [x] U-01 이 폴더에 CLAUDE.md, TASKS.md, docs/, .claude/ 복사
- [x] U-02 `git init`
- [ ] U-03 `npm create astro@latest tmp-astro` (템플릿: minimal, TypeScript: strict, 의존성 설치: Yes, git 초기화: No)
      폴더에 이미 파일이 있어 임시 폴더에 만든다.
- [ ] U-04 임시 폴더 내용을 프로젝트 폴더로 옮기고 임시 폴더 삭제
      `Get-ChildItem tmp-astro -Force | Move-Item -Destination . -Force`
      `Remove-Item tmp-astro`
- [ ] U-05 `npx astro add mdx` (질문에는 모두 Yes)
- [ ] U-06 `npm run dev`로 브라우저에 빈 페이지가 뜨는지 확인 후 종료 (Ctrl+C)
- [ ] U-07 첫 커밋: `git add .` → `git commit -m "초기 설정"`
- [ ] U-08 GitHub에 빈 저장소 생성 후 연결: `git remote add origin <주소>` → `git push -u origin main`
- [ ] U-09 `claude update`로 최신 버전 확인 후 이 폴더에서 `claude` 실행
- [ ] U-10 Claude Code 안에서 확인
      `/model`: Fable에 "Requires usage credits" 표시가 없어야 함
      `/hooks`: 훅 3개(SessionStart, Read, Bash)가 보여야 함
      `/mcp`: 안 쓰는 서버 끄기
- [ ] U-11 `/task` 입력 → T-01 시작

## 1. 시제품 — Fable 기간 (11/17 16:59 KST까지)
| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 |
|---|---|---|---|---|---|
| [ ] T-01 | A | F | 기본 레이아웃(헤더·사이드바·본문), 색·글꼴 변수, 다크 모드 | 없음 | 빈 페이지가 레이아웃에 맞게 뜸 |
| [ ] T-02 | B | F | StepAnimation 컴포넌트 (SVG 단계 전환, 이전·다음 버튼, 전환 모션) | 없음 | SVG 3장으로 전환 확인 |
| [ ] T-03 | D | F | 포토 공정 SVG 단면도 5장 (도포→노광→현상→식각→제거) | 없음 | StepAnimation에서 재생됨 |
| [ ] T-04 | B | F | TermCard 컴포넌트 (4개 국어 표시, 발음 버튼). 견본 용어 1개로 glossary.yaml 생성 | .claude/skills/term/SKILL.md | 용어 id를 넣으면 카드가 뜸 |
| [ ] T-05 | B | F | Quiz 컴포넌트 (객관식, 정답·해설 표시) | 없음 | 문항 배열을 넣으면 동작 |
| [ ] T-06 | D | F | 0단계 투어: 8장면 문구와 장면 구성안 | docs/spec.md | 장면 목록 파일 확정 |
| [ ] T-07 | D | F | 0단계 투어: SVG 8장 + 페이지 조립 | T-06 결과 파일 | 투어 재생됨 |
| [ ] T-08 | B | F | 용어집 페이지 (검색·모듈 필터) | glossary.yaml 앞 20줄 | 검색 동작 |

## 2. 시제품 — Sonnet (기간 무관)
| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 |
|---|---|---|---|---|---|
| [ ] T-09 | B | S | VideoEmbed 컴포넌트 (YouTube, 지연 로딩) | 없음 | 영상 id로 임베드됨 |
| [ ] T-10 | D | S | 레슨 템플릿 `src/content/_template.mdx` | .claude/skills/lesson/SKILL.md | 컴포넌트 4종이 들어간 견본 |
| [ ] T-11 | C | S | `/term 포토 공정 10개` | 없음 | 누적 11개 |
| [ ] T-12 | D | S | `/lesson 포토 공정` (검색 필요: 공식 영상 1개) | 없음 | 페이지 완성 |
| [ ] T-13 | C | S | `/term 전공정 10개` | 없음 | 누적 21개 |
| [ ] T-14 | C | S | `/term 후공정·HBM 10개` | 없음 | 누적 31개 |
| [ ] T-15 | C | S | `/term 기초 원리 10개` | 없음 | 누적 41개 |
| [ ] T-16 | C | S | `/term 현장 약어 10개` | 없음 | 누적 51개 |
| [ ] T-17 | E | S | GitHub Pages 배포 워크플로 | astro.config.mjs | 주소로 접속됨 |

→ 여기서 사용자 검토 (톤·디자인). 통과하면 3단계 작업을 같은 표 형식으로 추가.

## 3. 확장 (시제품 통과 후 작성)
- 레슨 1개 = 작업 3개: SVG / `/lesson` / `/term`
- 새 컴포넌트가 필요하면 유형 B 작업을 먼저 추가

## 4. 공개
| 번호 | 유형 | 모델 | 작업 | 읽을 파일 | 완료 기준 |
|---|---|---|---|---|---|
| [ ] T-90 | E | S | README (한·영), 라이선스 파일 (코드 MIT, 콘텐츠 CC BY-SA 4.0) | 없음 | 파일 생성 |
| [ ] T-91 | C | S | `verified: false` 용어 검수 (검색 필요, 10개씩 나눠 진행) | 없음 | 미확인 0개 |