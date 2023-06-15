import React from 'react';
import { Result } from 'antd';
import styled from 'styled-components';

const Layout = styled.div`
  background-color: white;
`;

function NotFound() {
  return (
    <Layout>
      <Result status="404" title="页面未找到，请确认访问链接是否正确" subTitle="404 Not-Found" />
    </Layout>
  );
}

export default NotFound;
