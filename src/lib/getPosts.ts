import { client } from "@/config/SanityClient";

export const getAllPosts = async () =>
  await client.fetch(
    `*[_type=="post"]{
      _id,
      socialMedia,
      socialId,
      link,
      "image":image.asset->url,
    }`
  );

export default getAllPosts;
