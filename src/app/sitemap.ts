import { getAllServices } from "@/lib/getServices";

const sitemap = async () => {
  const baseUrl = "https://www.webflexrr.com/";

  const services = await getAllServices();

  const serviceUrl = services.map((service) => {
    url: `${baseUrl}/services/${service.slug}`;
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
};

export default sitemap;
