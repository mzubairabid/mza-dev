/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mzadev.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};

export default config;