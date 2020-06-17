/* eslint-disable global-require */
const DeployType = require('./common/deploy-type');

module.exports = {
  envs: {
    // 生成 sourceMap
    REACT_APP_GENERATE_SOURCEMAP: true,
    // 应用部署的域名和子路径
    REACT_APP_PUBLIC_URL: '//registry.gmsofttest.com/{{projectName}}',
    // 网关服务器base路径
    REACT_APP_API_GATEWAY_BASE: '//www.test.com/demo/demo-gateway',
    // 发布部署, 建议配置不然每次都需要交互设置
    REACT_APP_DEPLOY_TYPE: DeployType.SCP,
    /**
     * machine 和 where 必须配置
     * see: https://192.168.2.10:8080/svn/GovProEleTrade/安装与配置/部署配置/发布配置 or your .deployrc config info
     */
    REACT_APP_DEPLOY_MACHINES: [
      { machine: 'machine1', where: [{ rootKey: 'nginx.webcomponent', path: '{{projectName}}' }] },
      { machine: 'machine2', where: [{ rootKey: 'nginx.webcomponent', path: '{{projectName}}' }] },
    ],
  },
};
