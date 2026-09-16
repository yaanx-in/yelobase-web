/**
 * Sanity schema for a blog post — the content model the Yelobase site reads
 * from (src/lib/sanity/blog.ts). The site only READS from Sanity via the API;
 * editing happens in a STANDALONE Sanity Studio.
 *
 * Set up the Studio (one time):
 *   1. In a NEW folder (not this repo):
 *        npm create sanity@latest -- --project pkdjcf5g --dataset production --template clean
 *   2. Copy this file to:  <studio>/schemaTypes/postType.ts
 *   3. Register it in <studio>/schemaTypes/index.ts:
 *        import { postType } from "./postType";
 *        export const schemaTypes = [postType];
 *   4. Run it:   npm run dev            (edit locally at localhost:3333)
 *      Deploy:   npx sanity deploy      (hosted editor at <name>.sanity.studio)
 *   5. Create a post, tick "Featured" on one, Publish.
 *
 * The block "styles" (normal / lead / h2 / h3) and "bullet" list map 1:1 to the
 * renderers in src/components/sections/blog/article.tsx (PT_COMPONENTS).
 */
import { defineType, defineField } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description: "Short summary used for previews and SEO description.",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "author", type: "string" }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({ name: "readTime", type: "string", description: 'e.g. "6 min read"' }),
    defineField({
      name: "accent",
      type: "string",
      description: "Cover gradient color for cards.",
      options: { list: ["purple", "coral", "teal", "amber"], layout: "radio" },
      initialValue: "purple",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Show as the large featured card on the blog index.",
      initialValue: false,
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Lead", value: "lead" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "author" } },
});
