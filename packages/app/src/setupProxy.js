/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2019-08-26 17:25:48
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2023-03-17 15:13:54
 * @Description: Nothing
 */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const createProxyMiddleware = require('http-proxy-middleware');

const proxyPlatform = process.env.REACT_APP_PROXY_PLATFORM || 'test';

const proxyConfs = {
  dev1: [
    ['/djc-gateway', 'https://www.cqzcjdev1.gm'],
    ['/gwebsite', 'https://www.cqzcjdev1.gm'],
    ['/yw-gateway', 'https://www.cqzcjdev1.gm'],
    ['/xcj-gateway', 'https://www.xcjdev1.gm'],
    ['/gateway', 'https://www.cqzcjdev1.gm'],
    ['/expert', 'https://www.cqzcjdev1.gm'],
  ],
  'test2-jydn': [
    ['/djc-gateway', 'http://jydn.xcjtest2.gm:34701'],
    ['/gwebsite', 'http://jydn.xcjtest2.gm:34701'],
    ['/yw-gateway', 'http://jydn.xcjtest2.gm:34701'],
    ['/gateway', 'http://jydn.xcjtest2.gm:34701'],
  ],
  test1: [
    ['/djc-gateway', 'https://www.cqzcjtest1.gm'],
    ['/gwebsite', 'https://www.cqzcjtest1.gm'],
    ['/yw-gateway', 'https://www.cqzcjtest1.gm'],
    ['/xcj-gateway', 'https://www.xcjtest1.gm'],
    ['/gateway', 'https://www.cqzcjtest1.gm'],
    ['/expert', 'https://www.cqzcjtest1.gm'],
  ],
  'test1-xcj': [
    ['/djc-gateway', 'https://www.xcjtest1.gm'],
    ['/xcj-gateway', 'https://www.xcjtest1.gm'],
    ['/gateway', 'https://www.xcjtest1.gm'],
    ['/yw-gateway', 'https://www.xcjtest1.gm'],
  ],
  'test1-ylam': [
    ['/djc-gateway', 'https://www.xcjtest1.gm'],
    ['/xcj-gateway', 'https://www.xcjtest1.gm'],
    ['/gateway', 'https://yljt.symhtest1.gm'],
  ],
  test2: [
    ['/djc-gateway', 'https://www.cqzcjtest2.gm'],
    ['/gwebsite', 'https://www.cqzcjtest2.gm'],
    ['/yw-gateway', 'https://www.cqzcjtest2.gm'],
    ['/xcj-gateway', 'https://www.xcjtest2.gm'],
    ['/gateway', 'https://www.cqzcjtest2.gm'],
    ['/expert', 'https://www.cqzcjtest2.gm'],
  ],
  show: [
    ['/djc-gateway', 'https://www.gpwbeta.com'],
    ['/gwebsite', 'https://www.gpwbeta.com'],
    ['/yw-gateway', 'https://www.gpwbeta.com'],
    ['/xcj-gateway', 'https://www.cqzcjshow.com'],
    ['/gateway', 'https://www.gpwbeta.com'],
    ['/expert', 'https://www.gpwbeta.com'],
  ],
  mock: [
    // ['/djc-gateway', 'https://www.cqzcjtest1.gm'],
    ['/djc-gateway', 'https://www.gpwbeta.com'],
    ['/gwebsite', 'https://www.cqzcjtest1.gm'],
    ['/xcj-gateway', 'https://www.xcjtest1.gm'],
    ['/gateway', 'https://www.cqzcjtest1.gm'],
    ['/expert', 'https://www.cqzcjtest1.gm'],
    // [
    //   '/yw-gateway/zcjopenbid',
    //   'http://192.168.7.105:7300/mock/6302ca5731cc11001958f155/online-assessment',
    // ],
    [
      '/yw-gateway/zcjopenbid',
      'http://easy-mock.gm/mock/614bf2b0a9b9ed72fada4b9c/online-assessment',
    ],
    ['/yw-gateway/zcjebidding', 'https://easy-mock.gm/mock/6195b1bf5fe0ba14b2675003/zcjebidding'],
    [
      '/yw-gateway/stockapplyperform',
      'http://easy-mock.gm/mock/60c087f8d10587266fd254ef/stockapplyperform',
    ],
    ['/yw-gateway/zcjstockexe', 'https://easy-mock.gm/mock/60c17040d10587266fd25532/zcjstockexe'],
  ],
};
const webScoketProxyConfs = {
  dev1: 'https://www.cqzcjtest1.gm',
  test1: 'https://www.cqzcjtest1.gm',
  test2: 'https://www.cqzcjtest2.gm',
  'test2-jydn': 'http://jydn.xcjtest2.gm:34701',
  show: 'https://www.gpwbeta.com',
  mock: 'https://www.cqzcjtest1.gm',
};

module.exports = app => {
  const targetConf = proxyConfs[proxyPlatform];
  targetConf.map(conf => {
    app.use(
      conf[0],
      createProxyMiddleware({
        target: conf[1],
        changeOrigin: true,
        secure: false, // conf[1].match(/(https)/) ? false : undefined,
      })
    );
  });
  // app.use(
  //   createProxyMiddleware('/socket.io', {
  //     target: webScoketProxyConfs[proxyPlatform] ?? 'https://www.cqzcjtest1.gm',
  //     ws: true,
  //     changeOrigin: true,
  //     secure: false,
  //   })
  // );
};
