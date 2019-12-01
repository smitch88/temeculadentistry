const path = require("path");
const sm = require("sitemap");
const fs = require("fs");

const OUTPUT_FILE = path.resolve(__dirname, "public", "sitemap.xml");

const sitemap = sm.createSitemap({
  hostname: "https://temeculavalleydentistry.com/",
  cacheTime: 600000, //600 sec (10 min) cache purge period
  urls: [
    { url: "/", changefreq: "weekly", priority: 1 },
    { url: "/about", changefreq: "yearly", priority: 0.5 },
    { url: "/services", changefreq: "yearly", priority: 0.5 },
    {
      url: "/services/cosmetic-dentistry",
      changefreq: "yearly",
      priority: 0.5
    },
    { url: "/services/endontics", changefreq: "yearly", priority: 0.5 },
    { url: "/services/oral-surgery", changefreq: "yearly", priority: 0.5 },
    {
      url: "/services/emergency-pain-relief",
      changefreq: "yearly",
      priority: 0.5
    },
    { url: "/reviews", changefreq: "weekly", priority: 0.5 },
    { url: "/contact", changefreq: "yearly", priority: 0.5 }
  ]
});

fs.writeFileSync(OUTPUT_FILE, sitemap.toString());

console.log(`Sitemap written at ${OUTPUT_FILE}`);
