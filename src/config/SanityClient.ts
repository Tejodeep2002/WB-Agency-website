import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-03-07",
  useCdn: true,
});


export const getAllServices = async () =>
  await client.fetch(`*[_type=="service"]`,{cache: 'force-cache'});

export const findServiceByName = async (serviceName: any) =>
  await client.fetch(`*[_type=="service" && name match "${serviceName}"]{
    name,description,image,procedure,weAreUsing,services
  }[0]`,{cache: 'force-cache'});
