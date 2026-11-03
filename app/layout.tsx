import type { Metadata } from 'next';
import '@fontsource/instrument-serif/latin-400.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import './globals.css';
import { siteUrl } from '@/lib/projects';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:'Zulsyahmi Zulkefli — Software for the everyday.',template:'%s — Zulsyahmi Zulkefli'},description:'Selected software projects, the decisions behind them, and the work of keeping them useful.',alternates:{canonical:'/'},openGraph:{type:'website',siteName:'Zulsyahmi Zulkefli',title:'Software for the everyday.',description:'Selected work by Zulsyahmi Zulkefli.',images:[{url:'/opengraph-image',width:1200,height:630}]},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>}
