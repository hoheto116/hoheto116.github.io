import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Software Engineer | Portfolio', description: 'Backend Engineering × AI-assisted Product Development' };
export default function Layout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="ja"><body><header><a className="brand" href="/">ENGINEER / PORTFOLIO</a><nav aria-label="メインナビゲーション"><a href="/#experience">Experience</a><a href="/#works">Works</a><a href="/#skills">Skills</a></nav></header>{children}<footer>Software Engineer Portfolio · <a href="https://github.com/hoheto116">GitHub</a></footer></body></html>; }
