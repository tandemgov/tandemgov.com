// icon convenience

function renderIcon(name, classes = "icon", applyColor = "fill", sprite = "sprite") {
    let ret = `<svg class="${classes}" ${applyColor}="currentColor">
        <use xlink:href="/assets/images/${sprite}/sprite.svg#${name}"></use>
      </svg>`;
    return ret;
} // renderIcon

module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("icon", renderIcon);
};