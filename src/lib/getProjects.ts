import { client } from "@/config/SanityClient";

const getAllProjects = async () =>
  await client.fetch(
    `*[_type=="project"]{
      id,
      name,
      description,
      category,
      projectOwnership,
      previewSpacing,
      preview,
      projectLink
      }`
  );

export default getAllProjects;
