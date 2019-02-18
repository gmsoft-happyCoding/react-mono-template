import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { utils } from 'common';
import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import CloudComponent from '@/components/CloudComponent';

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
  <LocaleProvider locale={zhCN}>
    <Provider store={stateContainer._store}>
      <Router history={stateContainer._history}>
        <>
          <Title>这是一个从 packages/compoments 项目远程加载的组件</Title>
          <SubTitle>
            如果你没有看到任何内容, 请检查 compoments 项目是否启动 <b>yarn start:c</b>
          </SubTitle>
          <SubTitle>
            如果你是第一次看到该模板, 建议你先阅读一下项目根目录的 README.md
            了解一下项目结构和有哪些命令可以使用
          </SubTitle>
          <CloudComponent url="http://localhost:3030/static/js/WhatToEat.js" />
          <CloudComponent url="http://localhost:3030/static/js/WhatToEat.js" defaultMode="search" />
        </>
      </Router>
    </Provider>
  </LocaleProvider>
);

// @ts-ignore
setConfig({ pureSFC: true });
export default hot(module)(App);
