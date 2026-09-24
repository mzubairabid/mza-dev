/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.mzadev.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

export default config;
