import { client } from "./SanityClient";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

export const imageUrlFor = (source: any) => {
  return builder.image(source);
};
