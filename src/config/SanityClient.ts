import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2022-03-07",
  useCdn: true,
});

export const getAllServices = async () => {
  return await client.fetch(`*[_type=="service"]`);
};

export const findServiceByName = async (serviceName: string) =>
  await client.fetch(
    `*[_type=="service" && name match "${serviceName}" ][0]{
      _id,
      procedure[]{
        _key,
        title,
        "image":image.asset->url,
        description,
        step
      },
      _type,
      name,
      services[]{
        _type,
        description,
        _key,
        title,
        "image":image.asset->url
      },
      weAreUsing[]{
        "iconImage":iconImage.asset->url,
        iconName,
        _key,
      },
      "image":image.asset->url,
      description
    }`
  );

export const getAllManagementData = async () =>
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
export const getAllFeedback = async () =>
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
export const getAllProjects = async () =>
  await client.fetch(
    `*[_type=="project"]{
      id,
      name,
      description,
      category,
      projectOwnership,
      previewSpacing,
      preview,
      }`
  );
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
