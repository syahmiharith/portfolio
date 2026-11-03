import {projects,linkedin,github} from '../lib/projects';
const base=process.env.SMOKE_URL;
const urls=base?[base,...projects.map(p=>`${base}/work/${p.slug}`),`${base}/sitemap.xml`,`${base}/robots.txt`,`${base}/opengraph-image`]:[...projects.flatMap(p=>[p.live,p.code,...p.evidence.map(e=>e.url)]),github];
let failed=false;for(const url of [...new Set(urls)]){try{const r=await fetch(url,{redirect:'follow',signal:AbortSignal.timeout(25000)});console.log(`${r.status} ${url}`);if(!r.ok)failed=true;}catch(e){console.error(url,String(e));failed=true;}}
console.log(`LinkedIn requires manual verification: ${linkedin}`);if(failed)process.exitCode=1;
