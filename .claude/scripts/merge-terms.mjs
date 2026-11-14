// 사용법: node .claude/scripts/merge-terms.mjs
// .claude/tmp/terms/*.yaml 조각을 src/data/glossary.yaml 끝에 중복 없이 합치고 조각을 지운다.
import fs from 'node:fs';
import path from 'node:path';

const dir = '.claude/tmp/terms';
const target = 'src/data/glossary.yaml';

if (!fs.existsSync(dir)) {
  console.log('합칠 용어 조각 없음');
  process.exit(0);
}
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.yaml')).sort();
if (files.length === 0) {
  console.log('합칠 용어 조각 없음');
  process.exit(0);
}

let glossary = fs.readFileSync(target, 'utf8').replace(/\r\n/g, '\n');
const ids = new Set([...glossary.matchAll(/^- id:\s*(\S+)/gm)].map((m) => m[1]));
const added = [];
const skipped = [];
let out = '';

for (const f of files) {
  const text = fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n/g, '\n');
  const start = text.search(/^- id:/m);
  if (start === -1) continue;
  for (const entry of text.slice(start).split(/^(?=- id:)/m)) {
    const id = entry.match(/^- id:\s*(\S+)/)?.[1];
    if (!id) continue;
    if (ids.has(id)) {
      skipped.push(id);
      continue;
    }
    ids.add(id);
    added.push(id);
    out += entry.replace(/\s*$/, '\n');
  }
}

if (out) {
  if (!glossary.endsWith('\n')) glossary += '\n';
  fs.writeFileSync(target, glossary + out);
}
for (const f of files) fs.unlinkSync(path.join(dir, f));

console.log(`추가 ${added.length}개: ${added.join(', ') || '-'}`);
if (skipped.length) console.log(`중복으로 건너뜀 ${skipped.length}개: ${skipped.join(', ')}`);
