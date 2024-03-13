// seo convenience
const tandemgov = require("../_data/tandemgov");

const getPageTitle = (title, seo_title) => {
    if(seo_title) {
        return seo_title;
    }
    return `${title} | ${tandemgov.site}`;
};

const getDescription = (title, seo_description) => {
    if(seo_description) {
        return seo_description;
    }
    return `${title} | ${tandemgov.site}`;
};

const getPreviewImage = (preview_image) => {
    preview_image = preview_image || tandemgov.preview_image;
    return `${tandemgov.HTTP_HOST}/assets/images/${preview_image}`
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("getPageTitle", getPageTitle);
    eleventyConfig.addShortcode("getDescription", getDescription);
    eleventyConfig.addShortcode("getPreviewImage", getPreviewImage);
};
