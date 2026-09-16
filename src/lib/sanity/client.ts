import { createClient } from "@sanity/client";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "pkdjcf5g";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

// Reads published blog content from the Sanity Content API.
// useCdn: true serves cached published docs (public dataset — no token needed).
export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
