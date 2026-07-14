// Central site configuration reused for <meta> tags, Open Graph, Twitter
// Cards, JSON-LD structured data, robots.txt and sitemap.xml.
//
// To point the site at a real domain, set VITE_SITE_URL in a .env file
// (see .env.example) instead of editing the fallback below.
const siteUrl = (
  import.meta.env.VITE_SITE_URL || "https://www.abrildigital.co"
).replace(/\/$/, "");

const site = {
  name: "Abril Digital Co.",
  shortName: "Abril Digital",
  url: siteUrl,
  title: "Abril Digital Co. — Páginas web para pequeños negocios",
  description:
    "Diseñamos páginas web modernas, rápidas y optimizadas para ayudar a pequeños negocios a conseguir más clientes.",
  keywords: [
    "diseño de páginas web",
    "diseño web para pequeños negocios",
    "páginas web Colombia",
    "agencia de diseño web",
    "mantenimiento de sitios web",
    "posicionamiento SEO",
  ],
  language: "es",
  locale: "es_CO",
  themeColor: "#0a0a0a",
  ogImage: `${siteUrl}/og-image.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  logo: `${siteUrl}/favicon.svg`,

  // TODO: fill in with real handles/pages once they exist.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    tiktok: "",
    twitter: "",
  },

  // TODO: replace with the real registered business address, if any.
  address: {
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "CO",
  },
};

export default site;
