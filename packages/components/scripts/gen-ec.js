/**
 * 生成导出组件 map
 */
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { pick, isEmpty } = require('lodash');
const exportComponents = require('../config/exportComponents');

function wirteFile(pickKeys) {
  const _exportComponents = `
/**
 * 此文件是脚本生成的, 请不要编辑或签入 svn 或 git
 * 想要修改导出哪些组件, 请编辑 exportComponents.js
 */
module.exports = ${JSON.stringify(pick(exportComponents, pickKeys), null, 2)}
`;

  fs.writeFileSync(path.join(__dirname, '..', 'config', '_exportComponents.js'), _exportComponents);
}

function genEC() {
  return new Promise(resolve => {
    const args = require('gar')(process.argv.slice(2));
    if (args['pick'] || args['p']) {
      const questions = [
        {
          type: 'checkbox',
          name: 'components',
          message: '请选择你想要发布的组件?',
          choices: Object.keys(exportComponents),
          pageSize: 10,
          validate: components => {
            if (isEmpty(components)) return '请选择要发布的组件';
            return true;
          },
        },
      ];

      inquirer.prompt(questions).then(({ components }) => {
        wirteFile(components);
        resolve();
      });
    } else {
      wirteFile(Object.keys(exportComponents));
      resolve();
    }
  });
}

module.exports = genEC;