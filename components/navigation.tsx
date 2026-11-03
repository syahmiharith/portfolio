'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';
export function Sidebar({ current }: {current?:string}) {
 const [active,setActive] = useState(current || 'splitflow');
 const art = useRef<HTMLDivElement>(null);
 useEffect(() => {
   if(current) return;
   const observer = new IntersectionObserver(entries => { for(const entry of entries) if(entry.isIntersecting) setActive(entry.target.id); },{rootMargin:'-15% 0px -55% 0px',threshold:0});
   projects.forEach(p=>{const el=document.getElementById(p.slug);if(el)observer.observe(el)});
   return ()=>observer.disconnect();
 },[current]);
 useEffect(()=>{
  const el=art.current;if(!el)return;
  const query=matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');let visible=true;
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting});observer.observe(el);
  const move=(e:PointerEvent)=>{if(!visible||!query.matches)return;const r=el.getBoundingClientRect();el.style.transform=`perspective(800px) rotateY(${((e.clientX-r.left)/r.width-.5)*5}deg) rotateX(${((e.clientY-r.top)/r.height-.5)*-5}deg)`};
  const reset=()=>{el.style.transform='none'};el.addEventListener('pointermove',move);el.addEventListener('pointerleave',reset);query.addEventListener('change',reset);
  return()=>{observer.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',reset);query.removeEventListener('change',reset)};
 },[]);
 return <aside className="sidebar"><Link href="/" className="identity">Zulsyahmi Zulkefli</Link><div className="ribbon" ref={art}><Image src="/images/ribbon.webp" alt="" width={1049} height={1499} priority sizes="(max-width: 899px) 80px, 24vw" /></div><nav className="project-index" aria-label="Selected projects"><span className="index-mark" aria-hidden="true">⊢</span>{projects.map(p=><a key={p.slug} href={current?`/#${p.slug}`:`#${p.slug}`} aria-current={active===p.slug?'location':undefined}><span>{p.number}</span><span>{p.title}</span><span className="index-dot" aria-hidden="true"/></a>)}</nav></aside>
}
