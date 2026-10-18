import type { Metadata } from "next";
import { ReunionDiagnosisClient } from "@/components/ReunionDiagnosisClient";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = { title: "10問で今の向き合い方を整理" };
export default function DiagnosisPage() {
  return <><PageHero title="復縁可能性診断" eyebrow="Your pace, your choice" description="今のご自身に近い回答を選んでください。答えることがつらいときは、いつでも休んで大丈夫です。" /><div className="container main-content"><ReunionDiagnosisClient /></div></>;
}
