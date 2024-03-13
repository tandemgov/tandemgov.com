const iconPlugin = require("./_11ty/icon");
const seoPlugin = require("./_11ty/seo");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/favicons": "assets/favicons" });
  eleventyConfig.addPassthroughCopy({ "src/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@uswds/uswds/dist/fonts": "assets/fonts" });
  eleventyConfig.addPlugin(iconPlugin);
  eleventyConfig.addPlugin(seoPlugin);
};
