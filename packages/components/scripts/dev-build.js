const yarnInstall = require('./utils/yarn-install');
// 如果没有安装依赖, 先安装依赖
yarnInstall();

const child_process = require('child_process');

const genEC = require('./gen-ec');

function devBuild(exportComponents) {
  child_process.execSync('yarn start', {
    stdio: 'inherit',
    env: { DEV_BUILD: true, PICK_EXPORT_COMPONENTS: JSON.stringify(exportComponents) },
  });
}

async function run() {
  process.env.NODE_ENV = 'development';

  const exportComponents = await genEC();
  devBuild(exportComponents);
}

run();
