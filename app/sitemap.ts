import type { MetadataRoute } from 'next';
import {projects,siteUrl} from '@/lib/projects';
export default function sitemap():MetadataRoute.Sitemap{return [{url:siteUrl,lastModified:'2026-11-03'},...projects.map(p=>({url:`${siteUrl}/work/${p.slug}`,lastModified:p.verified}))]}
