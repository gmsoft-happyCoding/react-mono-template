const path = require('path');
const paths = require('./paths');
const exportComponentConfig = require('./exportComponentsPath.config');

// 规约为 { component: componentPath }
const exportComponents = exportComponentConfig.reduce((components, component) => {
  if (typeof component === 'string') {
    /**
     * component name 与 path 相同
     */
    components[component] = path.join(paths.appSrc, 'components', component);
  } else {
    /**
     * component name 与 path 不同，使用 component[0] = key, component[1] = path
     */
    components[component[0]] = path.join(paths.appSrc, 'components', component[1]);
  }
  return components;
}, {});

module.exports = exportComponents;
