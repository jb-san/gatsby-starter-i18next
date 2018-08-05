/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 * This will copy the locales to the public folder on the build task
 */
global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fs = require("fs-extra");
const path = require("path");

exports.onPostBuild = () => {
  console.log("Copying locales");
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  );
};
