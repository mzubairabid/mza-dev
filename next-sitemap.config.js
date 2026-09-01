/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://mzadev.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transformRobotsTxt: async (config, robotsTxt) => {
    // Standard robots.txt ke end par llms.txt link append karna
    return `${robotsTxt}\n# AI Crawler Context File\nAllow: /llms.txt\nSitemap: https://mzadev.com/llms.txt\n`;
  },
};

export default config;