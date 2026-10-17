import type { Metadata } from "next";
import { ReunionDiagnosisClient } from "@/components/ReunionDiagnosisClient";
export const metadata: Metadata = { title: "10問で今の向き合い方を整理" };
export default function DiagnosisPage() {
  return <><div className="page-heading"><p className="eyebrow">Your pace, your choice</p><h1>復縁可能性診断</h1><p className="lead">今のご自身に近い回答を選んでください。答えることがつらいときは、いつでも休んで大丈夫です。</p></div><ReunionDiagnosisClient /></>;
}
