require('dotenv').config()

module.exports = function() {
  return {
    HTTP_HOST: process.env.HTTP_HOST || "https://tandemgov.com"
  };
};