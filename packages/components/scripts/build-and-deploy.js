const yarnInstall = require('./utils/yarn-install');
// 如果没有安装依赖, 先安装依赖
yarnInstall();

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const chalk = require('chalk');
const paths = require('../config/paths');
const loadDeployEnv = require('./utils/load-deploy-env');
const genEC = require('./gen-ec');

function printSegment(title) {
  console.log(chalk.magenta(`---------------------------${title}---------------------------`));
}

function buildAndDeploy(whichDeploy, exportComponents) {
  // project build
  printSegment('project build');
  child_process.execSync('yarn build', {
    stdio: 'inherit',
    env: { PICK_EXPORT_COMPONENTS: JSON.stringify(exportComponents) },
  });

  // docz build
  const args = require('gar')(process.argv.slice(2));
  if (!args['no-doc']) {
    printSegment('docz build');
    child_process.execSync('docz build', {
      stdio: 'inherit',
      env: { PICK_EXPORT_COMPONENTS: JSON.stringify(exportComponents) },
    });
  }

  // gen:meta
  printSegment('gen meta');
  child_process.execSync('yarn gen:meta', {
    stdio: 'inherit',
    env: { PICK_EXPORT_COMPONENTS: JSON.stringify(exportComponents) },
  });

  // deploy
  printSegment('deploy');
  child_process.execSync(`yarn deploy ${whichDeploy}`, { stdio: 'inherit' });
}

async function run() {
  process.env.NODE_ENV = 'production';

  const exportComponents = await genEC();
  const whichDeploy = await loadDeployEnv();
  buildAndDeploy(whichDeploy, exportComponents);
}

run();
