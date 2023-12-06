import { client } from "@/config/SanityClient";

 const getAllManagementData = async () =>
  await client.fetch(
    `*[_type=="management"]{
      _id,
      name,
      "profileImage":profileImage.asset->url,
      position,
      linkedIn,
      twitter,
      youtube,
      instagram,
    }`
  );

  export default getAllManagementData