import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "./client";

const builder = imageUrlBuilder(sanity);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
