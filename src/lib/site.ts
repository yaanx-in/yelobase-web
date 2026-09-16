// Canonical site origin, used for canonical URLs, OpenGraph, and JSON-LD.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yelobase.com"
).replace(/\/$/, "");
