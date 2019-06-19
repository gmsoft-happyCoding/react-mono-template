import { hot } from 'react-hot-loader/root';
import { utils } from 'common';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import CloudComponent, { loadComponent } from '@/components/CloudComponent';

// 通过组件名字 从 registry.gmsoftdev.com 加载
const WhatToEat = loadComponent({ name: 'test-project/WhatToEat' });

const { stateContainer } = utils;

const Title = styled.h2`
  text-align: center;
  padding: 15px;
`;

const SubTitle = styled.p`
  text-align: center;
  padding: 10px;
  margin: 0;
  color: #ca343c;
  b {
    background-color: rgba(250, 173, 20, 0.2);
    padding: 2px 5px;
    border-radius: 3px;
  }
`;

const App = () => (
  <Provider store={stateContainer._store}>
    <Router history={stateContainer._history}>
      <>
        <Title>这是一个从 packages/compoments 项目远程加载的组件</Title>
        <SubTitle>
          如果你没有看到任何内容, 请检查 compoments 项目是否启动 <b>yarn dev-build:c</b>
        </SubTitle>
        <SubTitle>
          如果你是第一次看到该模板, 建议你先阅读一下项目根目录的 README.md
          了解一下项目结构和有哪些命令可以使用
        </SubTitle>
        <CloudComponent url="http://localhost:3030/static/js/WhatToEat.js" />
        <CloudComponent url="http://localhost:3030/static/js/WhatToEat.js" defaultMode="search" />
        <WhatToEat />
        {/* 通过组件名字 从 registry.gmsoftdev.com 加载 */}
        <CloudComponent name="test-project/WhatToEat" defaultMode="search" />
      </>
    </Router>
  </Provider>
);

export default hot(App);
