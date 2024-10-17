export const baseUrl = "https://faishal-portofolio.vercel.app/";

export default async function sitemap() {
  const routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(), // Optional: Set last modified date
  }));

  return routes;
}
