"use strict";

let semver = require('semver'),
  chalk = require('chalk'),
  packageConfig = require('../package.json');

let exec = (cmd) => {
  return require('child_process').execSync(cmd).toString().trim()
};

let versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }, {
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  }
];

module.exports = () => {
  let warnings = [];
  versionRequirements.forEach((item) => {
    if (!semver.satisfies(item.currentVersion, item.versionRequirement)) {
      warnings.push(item.name + ': ' +
        chalk.styles.red(item.currentVersion) + ' should be ' +
        chalk.styles.green(item.versionRequirement))
    }
  })
};
