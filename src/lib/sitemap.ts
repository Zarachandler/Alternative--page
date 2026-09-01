export const BASE_URL = 'https://360airo.com';

export function getBaseUrl(_request: Request) {
  return BASE_URL;
}

export function xmlResponse(body: string) {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n${body}`,
    {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    },
  );
}

export function urlset(paths: string[], baseUrl = BASE_URL) {
  const lastmod = new Date().toISOString();
  const urls = paths
    .map((path) => `  <url><loc>${baseUrl}${path}</loc><changefreq>weekly</changefreq><priority>0.5</priority><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');

  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}
