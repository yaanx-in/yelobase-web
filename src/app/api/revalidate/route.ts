import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Sanity publish webhook -> instant blog updates.
 * Configure in sanity.io/manage -> API -> Webhooks:
 *   URL:    https://yelobase.com/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 *   Method: POST
 *   Trigger: on create/update/delete of _type == "post"
 */
export async function POST(req: NextRequest) {
  const secret =
    req.nextUrl.searchParams.get("secret") ?? req.headers.get("x-webhook-secret");
  const expected = process.env.SANITY_REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json(
      { revalidated: false, message: "Invalid or missing secret" },
      { status: 401 },
    );
  }

  revalidateTag("post");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
