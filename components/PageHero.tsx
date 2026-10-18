import Image from "next/image";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  home?: boolean;
  children?: React.ReactNode;
};

export function PageHero({ title, eyebrow = "Information", description, home = false, children }: PageHeroProps) {
  return (
    <section className={`page-hero${home ? " page-hero--home" : ""}`} aria-labelledby="page-title">
      <Image
        className="page-hero__image"
        src="/images/heroes/reunion-calm.webp"
        alt=""
        fill
        sizes="100vw"
        preload
      />
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__inner">
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-title">{title}</h1>
          {description && <p className="lead">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
