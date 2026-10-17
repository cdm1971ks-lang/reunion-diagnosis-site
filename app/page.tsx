import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function Home() {
  return (<>
    <PageHero title="復縁可能性診断" eyebrow="A little time for yourself" home>
        <p className="pill">全10問・無料・個人情報の入力なし</p>
        <p className="hero-subtitle">今の気持ちを大切に、<br />これからの距離感を考える。</p>
        <p className="lead">元恋人との距離感や連絡状況をもとに、今のあなたに合った向き合い方をやさしく整理します。</p>
        <Link className="button" href="/diagnosis">10問の診断をはじめる <span aria-hidden="true">→</span></Link>
        <p className="note">答えを急がず、ご自身のペースで進められます。</p>
    </PageHero>
    <div className="container main-content">
    <section className="section"><p className="eyebrow">About this diagnosis</p><h2>関係の答えを出す前に、<br />今の自分を見つめる時間に。</h2>
      <div className="grid">
        <article className="card"><span className="card-number">01</span><h3>今の距離感を整理する</h3><p>別れてからの時間や連絡の状況を、落ち着いて振り返ります。</p></article>
        <article className="card"><span className="card-number">02</span><h3>自分の回復も大切にする</h3><p>復縁したい気持ちを否定せず、休息や安心を優先する選択も考えます。</p></article>
        <article className="card"><span className="card-number">03</span><h3>今日できることを見つける</h3><p>5つの向き合い方から、今の回答に合った行動のヒントをお伝えします。</p></article>
      </div>
    </section>
    <section className="notice section"><h2>安心して使っていただくために</h2><p>復縁の成功確率や、相手の気持ちを判定するものではありません。連絡を拒まれている場合は、その意思を尊重することを大切にしています。</p><p>回答は画面内だけで扱い、外部への送信・永続保存は行いません。医療や心理カウンセリングの代わりになるものではありません。</p></section>
    </div>
  </>);
}
