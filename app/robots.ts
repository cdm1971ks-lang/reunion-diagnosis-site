import type { MetadataRoute } from "next";
// 公開承認前。本番URL確定・公開承認時に見直す。
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", disallow: "/" } }; }
