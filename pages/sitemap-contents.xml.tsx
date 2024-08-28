import { GetServerSideProps } from "next";
import { API_URL } from "../constants/constants";

const EXTERNAL_DATA_URL = "https://gooddreamer.id";

function generateSiteMapNovels(contents: any[]) {
  console.log(contents, "contents");
  const env = process.env.NEXT_PUBLIC_API_URL;
  const url = () => {
    switch (env) {
      case "https://api.gooddreamer.id/api/blog":
        return "https://gooddreamer.id";
      case "https://latte-api.gooddreamer.id/api/blog":
        return "https://latte-landing.gooddreamer.id";
      case "https://espresso-api.gooddreamer.id/api/blog":
        return "https://espresso-landing.gooddreamer.id";

      default:
        return "https://gooddreamer.id";
    }
  };
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${contents
     ?.map(({ uri }) => {
       return `
     <url>
         <loc>${`${url()}/blog/${uri}`}</loc>
     </url>
   `;
     })
     .join("")}
   </urlset>
 `;
}

function SiteMapNovels() {}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${API_URL}/contents/uri`);
  const contents: any = await res.json();

  // Generate the XML sitemap with the novels data
  const sitemap = generateSiteMapNovels(contents?.data);

  context.res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  context.res.write(sitemap);
  context.res.end();

  return {
    props: {},
  };
};

export default SiteMapNovels;
