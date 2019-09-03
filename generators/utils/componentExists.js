/**
 * componentExists
 *
 * Check whether there is already a component present with the given name
 */

const fs = require('fs');
const path = require('path');
const components = fs.readdirSync(path.join(__dirname, '../../src/components'));

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
