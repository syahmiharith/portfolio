import { spawn } from 'node:child_process';
const origin = 'http://localhost:3199';
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--port', '3199'], {stdio:'ignore'});
try {
  let ready = false;
  for(let attempt=0;attempt<60;attempt++) {
    try { if((await fetch(origin)).ok) {ready=true;break;} } catch {}
    await new Promise(resolve=>setTimeout(resolve,500));
  }
  if(!ready) throw new Error('Production server did not become ready');
  const check=spawn(process.execPath,['--import','tsx','scripts/check-links.ts'],{stdio:'inherit',env:{...process.env,SMOKE_URL:origin}});
  process.exitCode=await new Promise(resolve=>check.on('exit',code=>resolve(code??1)));
} finally { server.kill('SIGTERM'); }
