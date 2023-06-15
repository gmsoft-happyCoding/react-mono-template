import create from 'cloud-component';
import { mapValues } from 'lodash';

const registryServer = process.env.REACT_APP_COMPONENT_REGISTRY_SERVER || '';

const prefix = 'http://localhost:3030/{{projectDeployNameComponents}}/static/js/';
const devComponentMapper = {
  // 本项目DEBUG映射
  '{{projectDeployNameComponents}}/WhatToEat': 'WhatToEat',
};

const prefixGmsoft = 'http://localhost:3042/static/js/';
const devGmsoftComponentMapper = {
  // 公共组件的DEBUG映射
  'gmsoft/ProviderPicker2': 'ProviderPicker2',
  'gmsoft/StockPicker2': 'StockPicker2',
  'gmsoft/OrgPicker2': 'OrgPicker2',
  'gmsoft/AreaSelect': 'AreaSelect',
  'gmsoft/Annex': 'Annex',
};

const { loadComponent, CloudComponent } = create(
  null,
  registryServer,
  process.env.NODE_ENV === 'development'
    ? {
        ...mapValues(devComponentMapper, value => `${prefix}${value}.js`),
        ...mapValues(devGmsoftComponentMapper, value => `${prefixGmsoft}${value}.js`),
      }
    : undefined
);
export { loadComponent };

export default CloudComponent;
