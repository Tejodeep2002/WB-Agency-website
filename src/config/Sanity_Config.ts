import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2022-03-07",
  useCdn: true,
});

export const services = async () => await client.fetch(`*[_type=="service"]{
    name,description,"imageUrl": image.asset->url
  }`);


console.log(services)