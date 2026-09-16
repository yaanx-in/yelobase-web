import { createClient } from "@sanity/client";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "pkdjcf5g";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

// Reads published blog content from the Sanity Content API.
// A read (Viewer) token is used because this project doesn't serve anonymous
// API reads even with a public dataset. Server-only — never exposed to the client.
export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});
