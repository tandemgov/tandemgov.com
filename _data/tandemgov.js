require("dotenv").config();

module.exports = {
    HTTP_HOST: process.env.HTTP_HOST || "https://tandemgov.com",
    site: "TandemGov",
    tagline: "Good government,<wbr>better partnerships",
    description: "TandemGov helps organizations navigate government contracting while leveraging their strengths.",
    preview_image: "TandemGov-Preview.png",
    social: [{
        name: "LinkedIn",
        slug: "linkedin",
        url: "https://www.linkedin.com/company/tandemgov",
    }, {
        name: "GitHub",
        slug: "github",
        url: "https://github.com/tandemgov",
    }],
};
