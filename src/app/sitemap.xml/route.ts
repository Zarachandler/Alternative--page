import { getBaseUrl, xmlResponse } from '../../lib/sitemap';

export function GET(request: Request) {
  const baseUrl = getBaseUrl(request);
  const lastmod = new Date().toISOString();
  const sitemapUrls = [
    `${baseUrl}/pages-sitemap.xml`,
    `${baseUrl}/blog-sitemap.xml`,
    `${baseUrl}/tools-sitemap.xml`,
    `${baseUrl}/case-studies-sitemap.xml`,
    `${baseUrl}/comparisons-sitemap.xml`,
    `${baseUrl}/integrations-sitemap.xml`,
    `${baseUrl}/resources-sitemap.xml`,
    `${baseUrl}/images-sitemap.xml`,
  ];

  const body = sitemapUrls
    .map((loc) => `  <sitemap><loc>${loc}</loc><lastmod>${lastmod}</lastmod></sitemap>`)
    .join('\n');

  return xmlResponse(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>`);
}
