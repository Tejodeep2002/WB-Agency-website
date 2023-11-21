import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2022-03-07",
  useCdn: true,
});

// interface getAllServices {
//   procedure: {
//     description: string;
//     step: number;
//     _key: string;
//     title: string;
//   }[];
//   weAerUsing: {
//     iconName: string;
//     iconImage: object;
//     _key: string;
//   };
//   service: {
//     _type: string;
//     description: string;
//     _key: string;
//     title: string;
//     image: object;
//   };
//   name: string;
//   _createdAt: Date;
//   _type: string;
//   description: string;
//   _id: string;
// }

export const getAllServices = async () => {
  return await client.fetch(`*[_type=="service"]`, { cache: "force-cache" });
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
