# 全幅ヘッダー画像

対象: `/`, `/diagnosis`, `/privacy`, `/terms`, `/advertising`, `/contact`。

共通の `PageHero` をmain直下に置き、画像部分は画面幅100%、本文と見出し・CTAは既存の中央コンテナ幅に収めます。外側にカード枠・角丸を設けません。質問カード内・結果・判定・検索設定は変更していません。

- 保存先: `public/images/heroes/reunion-calm.webp`
- 1774×887px、123,026 bytes
- 組み込みimage_genツールで新規制作。生成PNGをWebP品質85へ変換
- ローズのカップ・ノート・花瓶を右、左は文字の安全領域
- PC: TOP最小580px、他ページ360px。白グラデーション左70%・右3%
- 700px以下: TOP最小620px、他ページ400px。左72%・右5%、写真は右側を基準にカップを残す
- 画像は装飾扱いの空alt。画像を欠損しても見出し・説明・操作はHTMLで残る
- 判定中の質問カードには画像を追加しない

## 最終生成プロンプト

Use case: photorealistic-natural. Asset type: full-bleed website hero background for a calm Japanese relationship self-reflection site for women in their thirties. Create one wide horizontal editorial photograph, approximately 2:1 landscape. Quiet elegant warm beige interior, natural side window light, real texture. Right third: a beautiful muted dusty rose ceramic cup, an open blank cream notebook and a delicate small vase with pale dried flowers on an oak desk. Main objects remain entirely within rightmost 40 percent of composition, with enough breathing room to crop for mobile. Left 60 percent: calm softly lit beige wall and desk, subtle natural tonal texture, large genuinely empty negative space for overlaid dark Japanese text, not a blank white digital fill. Rose, cream, linen and warm wood tones, mature restrained atmosphere. Natural photographic contrast and visible details, no hazy white wash or baked-in overlays. No people, no couples, no rings, no hearts, no phones, no lettering, no logos, no watermark. This is a photographic background asset only, not a website mockup, no UI.
