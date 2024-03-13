require("dotenv").config();

module.exports = function() {
  return {
    HTTP_HOST: process.env.HTTP_HOST || "https://tandemgov.com",
    social: [{
        name: "LinkedIn",
        slug: "linkedin",
        url: "https://www.linkedin.com/company/tandemgov",
    }, {
        name: "GitHub",
        slug: "github",
        url: "https://github.com/tandemgov",
    }]
  };
};