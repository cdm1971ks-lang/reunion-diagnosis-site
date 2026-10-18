# 紹介・結果イラストとOGP

2026-10-18。組み込み image_gen で9点を個別生成。紹介・結果の8点は同じ水彩・色鉛筆のローズ／ベージュ画風。生成PNGをsharpで900×600px WebP品質85に変換。OGPは1200×630px PNGに調整。生成原本はCodexのgenerated_imagesに保持。

| 保存先 | 内容 | 表示コード |
| --- | --- | --- |
| public/images/intro/distance.webp | ノート | app/page.tsx |
| public/images/intro/recovery.webp | カップと柔らかな布 | app/page.tsx |
| public/images/intro/actions.webp | チェックリスト | app/page.tsx |
| public/images/results/cooling.webp | 窓辺のカップ | components/ReunionDiagnosisClient.tsx |
| public/images/results/reflection.webp | ノートとペン | 同上 |
| public/images/results/friendship.webp | 適度に離れた2脚の椅子 | 同上 |
| public/images/results/reconnect.webp | 未送信の手紙 | 同上 |
| public/images/results/recovery.webp | ブランケットと植物 | 同上 |
| app/opengraph-image.png | 指定3文言のOGP | Next.jsファイル規約でog:imageを自動出力 |

結果の既存キーをそのまま画像名に対応させ、結果表示分岐の内部だけにImageを追加。紹介・結果は隣接テキストと重複する装飾画像のため空alt。幅・高さとsizesを指定し、CSSで縦横比を維持。PCの紹介は3列、スマホは1列。結果画像の最大幅は440px。

既存の全幅ヘッダー写真・PageHero・heroes.css、判定ロジック・質問・結果データ、noindex・robotsは変更なし。ヘッダー写真のGit blob SHAは9cf42a7357c803f2924fc1dcb1dd2063577ccd7c。

## 確認結果

- npm run typecheck: PASS
- npm run lint: PASS
- npm run build: PASS（全ページとopengraph-image.pngの静的生成）
- npm test: 既存10件PASS（全1,048,576通りの安全条件検証を含む）
- PC1280×900／スマホ390×844: TOPの紹介3枚を目視確認、読み込み成功、横はみ出しなし、全幅ヘッダー維持。
- スマホで既存の回答操作から結果5種類に到達し、各画像の切り替え・読み込み成功・横はみ出しなしを確認。回復結果はPCでも目視確認、画像最大幅440px。
- 質問カード内のimgは0。結果本文・操作ボタンの表示と再診断を確認。
- OGP画像本体の3文言・1200×630px・og:imageメタタグを確認。
- metadataBase未設定のためローカルビルドではOGPのホストがlocalhost:3000になる警告あり。Next.jsはVercel環境変数からプレビュー／本番ホストを解決する。今回は本番URL固定やその他SEO設定の変更なし。
- 参考URLは取得ツールでアクセス不可。指定された柔らかく落ち着いたローズ・ベージュの方針に従った。

## 完成版生成プロンプト

### 紹介：距離感の整理

Use case: illustration-story. Generate ONE finished website card illustration, landscape 3:2. Subject: a single open cream notebook with blank pages, resting on a warm beige desk, symbolizing calmly organizing one's feelings and relationship distance. Style for a cohesive series: delicate hand-painted watercolor and colored pencil editorial still life, matte paper grain, restrained dusty rose, oatmeal beige, ivory, muted taupe, subtle natural shadows, soft daylight, calm mature Japanese lifestyle editorial. Center subject within central 65 percent, generous negative space, uncluttered warm ivory background. No people, no text, no letters, no logos, no hearts, no arrows, no UI, no collage. This is an actual raster illustration asset, not a mockup.

### 残りの紹介・結果7点：共通指定

各主題の前に以下を付けて、それぞれ1枚ずつ生成。

Use case: illustration-story. Generate ONE finished landscape 3:2 website illustration. Cohesive series style: delicate hand-painted watercolor and colored pencil editorial still life, matte paper grain, dusty rose, oatmeal beige, ivory and muted taupe, soft daylight and subtle shadows, calm mature Japanese lifestyle editorial. Center subject in central 65 percent with generous margins, uncluttered warm ivory background. No people, no readable text, no letters, no logos, no hearts, no UI, no collage. Subject: 

- intro/recovery: a dusty rose ceramic cup beside softly folded cream linen cloth, suggesting gentle rest and self care.
- intro/actions: a cream paper checklist with three small hand-drawn rose checkmarks and faint horizontal pencil lines, on a beige desk. No readable words.
- results/cooling: a single dusty rose ceramic cup resting on a beige windowsill, gentle daylight through a simple window, peaceful pause, no other main objects.
- results/reflection: an open blank cream notebook and a single dusty rose pen neatly placed beside it on a beige desk, calm thoughtful moment.
- results/friendship: exactly two simple wooden chairs with dusty rose and beige seat cushions, placed a comfortable respectful distance apart, equal size, gentle inward angle, empty calm room, no table, no people.
- results/reconnect: an unsent cream handwritten letter with BLANK paper and a plain unsealed dusty rose envelope resting on a beige desk. No stamp, no address, no writing. A quiet possibility with no expectation.
- results/recovery: a softly folded dusty rose and cream blanket beside a small healthy muted green houseplant in a beige pot. A restful sunny corner, no people.

### OGP

Use case: ads-marketing. Create one finished Japanese website social sharing OGP image, exact 1200x630 landscape composition. Mature calm relationship self-reflection site. Warm ivory matte watercolor paper background, delicate dusty rose and beige watercolor still life of a small ceramic cup and blank notebook at right third, subtle muted plant. Left two thirds is clear safe area with elegant legible dark taupe Japanese typography. Render ONLY these exact Japanese lines, correctly and crisply: large title 「復縁可能性診断」; below in smaller size 「今の気持ちと距離感を、やさしく整理」; below a small dusty rose rounded label 「全10問・無料」. Do not render Japanese quotation brackets. Keep all text inside 70px safe margins, title largest, balanced spacing. Restrained dusty rose, beige, cream palette. No people, no hearts, no guarantees, no percentages, no additional text, no logos, no watermark, no UI screenshot.
