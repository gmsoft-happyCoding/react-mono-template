// 要导出的组件
const exportComponentConfig = [
  /**
   * name 与 path 相同
   */
  'WhatToEat',
  /**
   * name 与 path 不同
   * path 不包含 @/src/components 部分
   * 例如:
   * ['DemoComponent', 'demo/DemoComponent']
   */
  // ['name', 'path'],
];

module.exports = exportComponentConfig;
