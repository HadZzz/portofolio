export default function sitemap() {
  const baseUrl = "https://hazdev.vercel.app";

  // Define your routes
  const routes = ["", "/portfolio", "/resume", "/contact", "/blog"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
