// 사용법: node .claude/scripts/done.mjs T-03
// TASKS.md를 읽지 않고도 작업을 완료 표시한다.
import fs from 'node:fs';

const id = process.argv[2];
if (!/^T-\d+$/.test(id || '')) {
  console.log('사용법: node .claude/scripts/done.mjs T-번호');
  process.exit(1);
}
const file = 'TASKS.md';
const before = fs.readFileSync(file, 'utf8');
const after = before.replace(new RegExp(`\\[ \\] ${id}(?!\\d)`), `[x] ${id}`);
if (before === after) {
  console.log(`${id}: 미완료 항목을 찾지 못함`);
  process.exit(1);
}
fs.writeFileSync(file, after);
console.log(`${id} 완료 표시`);
