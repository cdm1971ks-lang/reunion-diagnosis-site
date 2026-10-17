import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "復縁可能性診断｜今の向き合い方をやさしく整理", template: "%s | 復縁可能性診断" },
  description: "元恋人との距離感や連絡状況をもとに、今のあなたに合った向き合い方をやさしく整理します。全10問・無料。",
  // 本番URL未確定・公開承認前のため、検索インデックスは無効にする。
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja"><body>
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="site-header"><div className="container header-inner">
        <Link className="brand" href="/">復縁可能性診断<span>気持ちと距離感を、ゆっくり整理</span></Link>
        <nav aria-label="メインナビゲーション"><Link href="/">トップ</Link><Link href="/diagnosis">診断する</Link></nav>
      </div></header>
      <main id="main" className="container main">{children}</main>
      <footer className="site-footer"><div className="container">
        <p className="brand">復縁可能性診断</p>
        <p>ご自身の気持ちと、今できることを整理するための情報サイトです。</p>
        <nav className="footer-links" aria-label="フッターナビゲーション">
          <Link href="/privacy">プライバシーポリシー</Link><Link href="/terms">利用規約・免責事項</Link>
          <Link href="/advertising">広告・PRポリシー</Link><Link href="/contact">お問い合わせ</Link>
        </nav>
        <p className="note">広告・PRを掲載する場合は、分かりやすく表示します。現在、広告リンクは設置していません。</p>
      </div></footer>
    </body></html>
  );
}
