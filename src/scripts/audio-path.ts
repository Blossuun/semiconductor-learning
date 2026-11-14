import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** 미리 만든 mp3가 있으면 그 주소를, 없으면 undefined를 돌려준다. (빌드 때만 쓴다) */
export function audioPath(kind: 'terms' | 'phrases', id: string, field: string): string | undefined {
	const rel = `audio/${kind}/${id}/${field}.mp3`;
	if (!existsSync(join(process.cwd(), 'public', rel))) return undefined;
	return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${rel}`;
}
