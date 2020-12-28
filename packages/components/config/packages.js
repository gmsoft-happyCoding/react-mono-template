const fs = require('fs');
const path = require('path');
const paths = require('./paths');

const packagesRoot = path.join(paths.appPath, '..');
const projectRoot = path.join(packagesRoot, '..');

let packages = [];
if (path.parse(packagesRoot).name === 'packages') packages = fs.readdirSync(packagesRoot);

const packageSrcRelativeProjectRootPaths = packages.map(p => path.join('packages', p, 'src'));

const packageSrcAbsPaths = packages.map(p => path.resolve(packagesRoot, p, 'src'));

module.exports = {
  projectRoot,
  packages,
  packageSrcRelativeProjectRootPaths,
  packageSrcAbsPaths,
};
