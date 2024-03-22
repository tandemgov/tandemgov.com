const { iconPlugin, seoPlugin, sectionPlugin } = require("./_11ty/plugins");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "node_modules/@uswds/uswds/dist/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/favicons": "assets/favicons" });
  eleventyConfig.addPassthroughCopy({ "src/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "assets/fonts" });
  eleventyConfig.addPlugin(iconPlugin);
  eleventyConfig.addPlugin(seoPlugin);
  eleventyConfig.addPlugin(sectionPlugin);
};
