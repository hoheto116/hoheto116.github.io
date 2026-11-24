const career = [
{period:'2026 — Present',title:'IT Consulting & Engineering',body:'ITコンサルタント・エンジニアとして活動。'},
{period:'2024 — 2026',title:'AI & Product Innovation',body:'生成AIを活用した業務改革の企画・要件定義・プロジェクト推進。RAGに続くAI活用領域の拡張、MCPの技術検証、Claude Codeを用いた機能拡張やSaaS刷新への参画。'},
{period:'2023 — 2024',title:'SaaS & Data Engineering',body:'自社SaaSの開発・運用、新規データ分析サービスのPoC・基盤構築・開発リード、社内RAGシステムの導入とリリース。'},
{period:'2016 — 2022',title:'Backend & Infrastructure Engineering',body:'Javaを中心とした基幹・周辺システムの開発・保守、クラウド移行、要件定義から納品までの開発リード。'}
];
export default function Experience(){return <main><section><p className="eyebrow">PROFESSIONAL EXPERIENCE</p><h1>職務経歴</h1><p>2016年からソフトウェア開発に従事。バックエンドを軸に、インフラ、プロダクト開発、生成AI活用へと領域を広げてきました。</p>{career.map(item=><article key={item.period}><p className="eyebrow">{item.period}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}</section><section><h2>得意領域</h2><p>業務課題の分析、技術選定、システム設計・実装、クラウド基盤構築、プロジェクト推進、リリース後の運用改善。</p><h2>保有資格</h2><p>基本情報技術者 / 応用情報技術者</p><p>守秘義務とプライバシーに配慮し、職務経歴は概要のみ掲載しています。</p></section><a href="/#experience">← トップページへ</a></main>}
