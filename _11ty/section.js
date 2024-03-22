
// section convenience
function renderSection(content="", color="white", classes="") {
    let ret = `
        <section class="section section--${color} ${classes}"><div class="wrapper">
            ${content}
        </div></section>
        `;
    return ret;
} // renderSection

module.exports = function(eleventyConfig) {
    eleventyConfig.addPairedShortcode("section", renderSection);
};
