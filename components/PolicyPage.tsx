export function PolicyPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <article className="policy card"><p className="eyebrow">Information</p><h1>{title}</h1>{children}</article>;
}
