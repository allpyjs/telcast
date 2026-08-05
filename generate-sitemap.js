// generate-sitemap.js
import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "weekly", priority: 0.9 },
  { url: "/about-us", changefreq: "monthly", priority: 0.5 },
];

const sitemapStream = new SitemapStream({ hostname: "https://ameristruct.org" });

streamToPromise(sitemapStream)
  .then((data) => writeFileSync("./public/sitemap.xml", data.toString()))
  .catch(console.error);

links.forEach((link) => sitemapStream.write(link));
sitemapStream.end();
