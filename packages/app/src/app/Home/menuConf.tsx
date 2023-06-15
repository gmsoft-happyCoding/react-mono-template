import React from 'react';
import { RouteProps } from 'react-router';
import lodash from 'lodash';

export interface RouteObj extends RouteProps {
  name: string; // 要显示的  名字
  icon: string; // 图标  antd
  key?: string; // 路由跳转地址   为什么是key 因为antd组件要的键名
  path?: string; // 路由跳转地址   route需要
  display?: boolean; // 是否显示
  children?: RouteObj[]; // 孩子节点
  exact?: boolean;
  strict?: boolean;
}
/* eslint-disable */

const icons = [
  'apple',
  'github',
  'gitlab',
  'google-plus',
  'code',
  'customer-service',
  'gift',
  'heart',
  'shopping',
  'star',
  'woman',
];

const getIcon = () => {
  const index = lodash.random(0, icons.length - 1);
  return icons[index];
};

const pathConf = {
  PATH_WHAT_TO_EAT: '/whatToEat',
  PATH_WHAT_TO_EAT_1: '/whatToEat_1',
  PATH_WHAT_TO_EAT_2: '/whatToEat_2',
  PATH_EXCEPTION_401: '/401',
  PATH_EXCEPTION_403: '/403',
  PATH_EXCEPTION_404: '/404',
};

const menuConf: RouteObj[] = [
  {
    name: '吃点啥',
    icon: getIcon(),
    path: pathConf.PATH_WHAT_TO_EAT,
    key: pathConf.PATH_WHAT_TO_EAT,
    children: [
      {
        name: '早餐吃点啥',
        icon: getIcon(),
        path: pathConf.PATH_WHAT_TO_EAT_1,
        key: pathConf.PATH_WHAT_TO_EAT_1,
        component: React.lazy(() => import('../WhatToEat/WhatToEat')),
      },
      {
        name: '晚餐吃点啥',
        icon: getIcon(),
        path: pathConf.PATH_WHAT_TO_EAT_2,
        key: pathConf.PATH_WHAT_TO_EAT_2,
        component: React.lazy(() => import('../WhatToEat/WhatToEat')),
      },
    ],
  },
];

export { menuConf, pathConf };
