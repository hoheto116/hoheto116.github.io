const stages = [
['01 / PURPOSE','目的','集中できる理想の書斎をつくりたい。','Wishlistの目的管理。共通Goalモデルは未決定。'],
['02 / PLAN','計画','机・椅子の候補を集め、配置案を比較する。','2D配置・回転・矩形干渉判定・代替案。'],
['03 / RESOURCES','資源','採用案の必要額を見積もり、貯蓄計画を立てる。','Wishlist・部屋案と目的別貯蓄の連携。'],
['04 / ACTION','行動','購入や片付けの予定を決める。','タスク・予定管理。計画からの自動生成全般は未完成。'],
['05 / RESULTS','実績','購入した物と資金の変化を確認する。','購入実績・所有物・Task参照・資金連携。'],
['06 / REVIEW','振り返り','残額や優先順位を見直す。','目的別の統合ビューは今後の設計対象。']
];
export default function Page(){return <main>
<section><p className="eyebrow">CASE STUDY / 継続開発中</p><h1>Life Canvas</h1><p>描きたい生活を、叶える毎日へ。</p><h2>プロダクト思想</h2><p>生活を管理するためではなく、望む生活をつくるための基盤。お金、モノ、時間、行動を個別に管理するだけでなく、実現したい目的を起点につなぎます。</p><div className="architecture"><div>実現したい生活 / Purpose</div><p aria-hidden="true">↓</p><div className="architecture-row"><span>モノ・空間</span><span>資金</span><span>時間・行動</span></div><p aria-hidden="true">↓</p><div>実績・振り返り → 次の計画</div></div><p>プロダクトの目指す概念図であり、統合画面の実装を示すものではありません。</p></section>
<section><h2>代表シナリオ：理想の書斎</h2><p>家具を買うこと自体ではなく、望む住環境の実現を起点とする架空の利用例です。</p>{stages.map(([label,title,story,status])=><article key={label}><p className="eyebrow">{label}</p><h3>{title}</h3><p>{story}</p><p><strong>現行機能・設計：</strong>{status}</p></article>)}</section>
<section><h2>設計上の判断</h2><h3>選択肢と必要資金を区別する</h3><p>代替案を無条件に合算せず、未見積・未接続をゼロと区別します。</p><h3>実績と資金の整合性を保つ</h3><p>購入と資金出金の二重計上を防ぎ、既存データの責務と保存境界を維持します。</p><h3>利用者の意思決定を尊重する</h3><p>採用案や行動は利用者が決め、自動決定や暗黙の出金を前提にしません。</p><h2>技術構成</h2><p>React / TypeScript / JavaScript / Cloudflare Workers / D1 / SQLite</p></section>
<section><h2>今後の構想</h2><p>一つの目的から採用案、必要資金、予定・実績、次の行動を確認できる統合ビューを検討しています。既存の機能別入口は維持する方向です。</p><h3>技能習得への展開（将来構想）</h3><p>身につけたい技能を起点に、本棚・教材・学習計画をつなぐ体験も構想しています。現行機能ではありません。</p><p>詳細な実装ポートフォリオは公開準備中です。</p></section><a href="/#works">← 制作実績へ</a></main>}
