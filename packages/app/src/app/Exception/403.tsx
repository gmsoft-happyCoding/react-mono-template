import React from 'react';
import { Result } from 'antd';
import styled from 'styled-components';

const Layout = styled.div`
  background-color: white;
`;

function NotFound() {
  return (
    <Layout>
      <Result status="403" title="您无权限访问此页面" subTitle="403 Not Permission" />
    </Layout>
  );
}

export default NotFound;
