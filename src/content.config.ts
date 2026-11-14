import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const glossary = defineCollection({
	loader: file('src/data/glossary.yaml'),
	schema: z.object({
		ko: z.string(),
		en: z.string(),
		ja: z.string(),
		ja_reading: z.string(),
		zh_cn: z.string(),
		zh_cn_pinyin: z.string(),
		zh_tw: z.string(),
		zh_tw_pinyin: z.string(),
		abbr: z.string().optional(),
		field_usage: z.string().optional(),
		example_ko: z.string().optional(),
		example_en: z.string().optional(),
		example_ja: z.string().optional(),
		example_zh_cn: z.string().optional(),
		example_zh_tw: z.string().optional(),
		definition_ko: z.string(),
		module: z.number().int().min(0).max(8),
		verified: z.boolean(),
		sources: z.array(z.string()).optional(),
	}),
});

const phrases = defineCollection({
	loader: file('src/data/phrases.yaml'),
	schema: z.object({
		situation: z.string(),
		ko: z.string(),
		en: z.string(),
		ja: z.string(),
		ja_reading: z.string().optional(),
		zh_cn: z.string(),
		zh_cn_pinyin: z.string().optional(),
		zh_tw: z.string(),
		zh_tw_pinyin: z.string().optional(),
	}),
});

export const collections = { glossary, phrases };
