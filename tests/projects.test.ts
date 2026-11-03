import {test} from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {projects} from '../lib/projects';
test('every featured project has a unique route, real media, story and dated evidence',()=>{assert.equal(new Set(projects.map(p=>p.slug)).size,3);for(const p of projects){assert.ok(existsSync(`public${p.media}`));assert.ok(existsSync(`content/${p.slug}.mdx`));assert.match(p.verified,/^\d{4}-\d{2}-\d{2}$/);assert.ok(p.evidence.length);assert.equal(new URL(p.live).protocol,'https:');assert.match(readFileSync(`content/${p.slug}.mdx`,'utf8'),/## Current boundaries/);}});
