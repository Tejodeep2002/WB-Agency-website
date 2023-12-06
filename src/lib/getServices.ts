import { client } from "@/config/SanityClient";

export const getAllServices = async () =>
  await client.fetch(
    `*[_type=="service"]{
      _id,name,description,"image":image.asset->url
  }`
  );

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
