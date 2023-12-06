import { client } from "@/config/SanityClient";

const getAllFeedback = async () =>
  await client.fetch(
    `*[_type=="feedback" ]{
      _id,
      clientName,
      clientPosition,
      rating,
      message,
      "image":image.asset->url,
      _type
    }`
  );

export default getAllFeedback;
