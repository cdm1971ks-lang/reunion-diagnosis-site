import { PageHero } from "@/components/PageHero";

export function PolicyPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <><PageHero title={title} description="安心してご利用いただくためのご案内です。" /><div className="container main-content"><article className="policy card">{children}</article></div></>;
}
