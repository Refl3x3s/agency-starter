import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Emits robots.txt and sitemap.xml at build time using VITE_SITE_URL, so the
// production domain only ever needs to be set in one place (.env).
function seoFilesPlugin(siteUrl) {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/proyectos</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`

  return {
    name: 'seo-files',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robotsTxt })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://www.abrildigital.co').replace(/\/$/, '')

  return {
    plugins: [react(), tailwindcss(), seoFilesPlugin(siteUrl)],
  }
})
