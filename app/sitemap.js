export const baseUrl = "https://www.faishal24.my.id/";

export default async function sitemap() {
  const routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(), // Optional: Set last modified date
  }));

  return routes;
}
