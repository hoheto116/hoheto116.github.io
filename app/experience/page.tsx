const career = [
{period:'2026 — Present',title:'IT Consulting & Engineering',body:'ITコンサルティング企業のエンジニアとして、顧客の基幹業務システム刷新に参画。AI駆動開発による実装・試験・顧客要望への対応。'},
{period:'2024 — 2026',title:'AI & Product Innovation',body:'生成AIを活用した業務改革の企画・要件定義・プロジェクト推進。AIプロダクト開発、外部HRサービスとのETL連携の設計・実装、全社RAG基盤の刷新・導入推進、勤怠サービスのUX改善。MCPの技術検証、Claude Codeを用いた機能拡張やSaaS刷新への参画。'},
{period:'2023 — 2024',title:'SaaS & Data Engineering',body:'自社SaaSの開発・運用、新規データ分析サービスのPoC・基盤構築・開発リード、社内RAGシステムの導入・API実装・業務システム連携、年末調整システムの画面改修とOCR検証支援。'},
{period:'2016 — 2022',title:'Backend & Infrastructure Engineering',body:'Javaを中心とした基幹・周辺システムの開発・保守、ASTERIAとPostgreSQLによる全社データ連携基盤の開発、Javaのバージョン移行、帳票・業務画面の改修、GeneXusによる業務システム開発、クラウド移行、要件定義から納品までの開発リード。'}
];
export default function Experience(){return <main><section><p className="eyebrow">PROFESSIONAL EXPERIENCE</p><h1>職務経歴</h1><p>2016年からソフトウェア開発に従事。バックエンドを軸に、インフラ、プロダクト開発、生成AI活用へと領域を広げてきました。</p>{career.map(item=><article key={item.period}><p className="eyebrow">{item.period}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}</section><section><h2>得意領域</h2><p>業務課題の分析、技術選定、システム設計・実装、クラウド基盤構築、プロジェクト推進、リリース後の運用改善。</p><h2>保有資格</h2><p>基本情報技術者 / 応用情報技術者</p><p>守秘義務とプライバシーに配慮し、職務経歴は概要のみ掲載しています。</p></section><a href="/#experience">← トップページへ</a></main>}
