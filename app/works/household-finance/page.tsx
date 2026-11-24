import Image from 'next/image';
const repo = 'https://github.com/hoheto116/household-finance-portfolio';
const images = 'https://raw.githubusercontent.com/hoheto116/household-finance-portfolio/40b151fc4b1469727d8386ff53ca20e0c67a6b88/screenshots/';
const screens = [
['line-registration.png','LINEでの入力・登録確認','確認操作を経て請求情報を登録。'],
['line-notification.png','LINE通知・リッチメニュー','家族への通知と項目別入力の入口。'],
['monthly-calculation.png','Web月次計算','振込額と計算内訳を確認。'],
['formula-editor.png','計算式編集','演算と項目参照を組み合わせる編集UI。'],
['custom-item.png','ユーザー項目追加','区分・入力方式・周期などを設定。'],
['family-invitation.png','家族の招待・承認','期限付き招待と管理者承認。']
];
export default function Page(){return <main>
<section><p className="eyebrow">CASE STUDY / 実運用</p><h1>Household Finance</h1><p>現在の生活を改善する。</p><p>LINEとWebを連携させた家計管理・月次精算システム。家庭内で実際に運用しています。</p><h2>開発背景</h2><p>Excelで行っていた月次精算を、請求情報の登録から計算・確定・履歴管理まで一つの流れに整理しました。</p><h2>利用の流れ</h2><ol><li>LINEで請求情報を登録する</li><li>Webで月次の金額と計算式を確認する</li><li>振込確認・証跡登録・月次確定を行う</li></ol></section>
<section><h2>実際の操作画面</h2><p>実運用画面を公開用にマスキングしています。画像を選択すると拡大できます。</p><div className="screen-grid">{screens.map(([file,title,description])=><figure key={file}><a href={images+file}><Image src={images+file} alt={title} width={800} height={1000} unoptimized style={{width:'100%',height:'auto'}} /></a><figcaption><strong>{title}</strong><br/>{description}</figcaption></figure>)}</div></section>
<section><h2>システム構成</h2><div className="architecture"><div className="architecture-row"><span>LINE / Messaging API</span><span>Web / React・TypeScript</span></div><p aria-hidden="true">↓ ↑</p><div>API / Hono・Cloudflare Workers</div><p aria-hidden="true">↓ ↑</p><div className="architecture-row"><span>D1 / データ管理</span><span>R2 / 証跡画像</span></div></div><p>主要な構成要素を示した概略図です。</p><h2>技術的な工夫</h2><h3>計算精度と柔軟性</h3><p>文字列式の直接実行を避け、JSONの式ツリーを検証・評価。BigIntによる有理数計算と明示的な丸め、循環参照の検出を採用しました。</p><h3>データ整合性とセキュリティ</h3><p>月次スナップショット、競合制御、Webhook署名検証、非公開R2と期限付き画像URLを採用しています。</p></section>
<section><h2>AIを活用した開発プロセス</h2><p>開発者が課題・要件・計算ルール・設計方針を判断し、Codexがコード生成・修正・検証作業を支援。実機での受入確認と実運用から改善を進めています。</p><h3>具体例：月次計算</h3><p>丸めや項目参照の仕様を明確化し、Excelとの照合、循環参照、未入力と0円の区別、確定済み月の再計算防止を検証観点としました。</p><p><a href={repo+'/blob/main/docs/ai-development-process.md'}>開発プロセスの詳細 →</a></p><p><a href={repo+'/blob/main/showcase/calculation-engine.ts'}>計算エンジンの実装 →</a></p><a className="button" href={repo}>GitHubで実装・画面・テストを見る →</a></section><a href="/#works">← 制作実績へ</a></main>}
