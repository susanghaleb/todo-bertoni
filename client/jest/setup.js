// eslint-disable-next-line import/no-extraneous-dependencies
const { defaults } = require("jest-config");

module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"]
  // ...
};
