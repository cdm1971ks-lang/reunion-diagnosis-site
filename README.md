# 復縁可能性診断サイト

独立型のNext.js / React / TypeScriptサイト。ポータルのDraft PR #23の10問・5結果タイプ・判定ロジック・結果文を再利用しています。既存サイトには変更を加えません。

## ローカル実行

Node.js 22以上で `npm ci`、`npm run dev`。

検証: `npm run typecheck` / `npm run lint` / `npm test` / `npm run build`。

## 構成

- `/`: 診断TOP
- `/diagnosis`: 1問ずつの10問4択、戻る、進捗、5タイプの結果、再診断
- `/privacy` / `/terms` / `/advertising` / `/contact`: 各案内
- `lib/reunionDiagnosis.ts`: PR #23の質問・結果・安全性を優先した判定
- `lib/quizFlow.ts`: 回答・戻る・やり直しの状態遷移

回答はReactのメモリ内のみで扱い、送信・永続保存しません。個人情報の入力、アクセス解析、広告リンクはありません。連絡拒否やブロックがある回答では再接触を勧めず、ご自身の回復を優先します。

## 公開前の状態

マージ・本番公開は未承認です。デプロイ設定・自動公開ワークフローは追加しません。本番URLは未確定のため、別サイトのURL、canonical、sitemap、検証用IDはコピーしていません。robotsとmetadataは検索インデックスを無効にしています。noindexはアクセス制御ではありません。

公開承認後に本番URL・OGP・sitemap・robotsを確認します。問い合わせ先は未確定のため準備中の案内としています。ポータル側の公開状態とリンクは別途、本番動作確認後に更新します。
