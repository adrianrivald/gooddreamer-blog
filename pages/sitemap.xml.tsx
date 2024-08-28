const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }: any) => {
  const env = process.env.NEXT_PUBLIC_API_URL;
  const url = () => {
    switch (env) {
      case "https://api.gooddreamer.id/api/blog/":
        return "https://gooddreamer.id";
      case "https://latte-api.gooddreamer.id/api/blog/":
        return "https://latte-landing.gooddreamer.id";
      case "https://espresso-api.gooddreamer.id/api/blog/":
        return "https://espresso-landing.gooddreamer.id";

      default:
        return "https://gooddreamer.id";
    }
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <sitemap>
      <loc>${url()}/sitemap-contents.xml</loc>
      <lastmod>2024-08-27</lastmod>
     </sitemap>
    </sitemapindex>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
