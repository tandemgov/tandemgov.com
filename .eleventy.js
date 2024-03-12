const iconPlugin = require("./_11ty/icon.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/favicons": "assets/favicons" });
  eleventyConfig.addPassthroughCopy({ "src/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@uswds/uswds/dist/fonts": "assets/fonts" });
  eleventyConfig.addPlugin(iconPlugin);
};
