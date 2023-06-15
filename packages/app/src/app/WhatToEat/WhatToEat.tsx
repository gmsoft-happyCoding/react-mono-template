import React from 'react';
import styled from 'styled-components';
import CloudComponent, { loadComponent } from '@/components/CloudComponent';

// 通过组件名字 从 registry.xcjdev1.gm 加载
const WhatToEatRemote = loadComponent({ name: 'test-project/WhatToEat' });

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

function WhatToEat() {
  return (
    <>
      <Title>这是一个从 packages/components 项目远程加载的组件</Title>
      <SubTitle>
        如果你没有看到任何内容, 请检查 components 项目是否启动 <b>yarn dev-build:c</b>
      </SubTitle>
      <SubTitle>
        如果你是第一次看到该模板, 建议你先阅读一下项目根目录的 README.md
        了解一下项目结构和有哪些命令可以使用
      </SubTitle>
      <CloudComponent url="http://localhost:3030/{{projectDeployNameComponents}}/static/js/WhatToEat.js" />
      <CloudComponent
        url="http://localhost:3030/{{projectDeployNameComponents}}/static/js/WhatToEat.js"
        defaultMode="search"
      />
      <WhatToEatRemote />
      {/* 通过组件名字 从 registry.xcjdev1.gm 加载 */}
      <CloudComponent name="test-project/WhatToEat" defaultMode="search" />
    </>
  );
}

export default WhatToEat;
