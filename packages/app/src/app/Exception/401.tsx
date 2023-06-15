import React from 'react';
import { Result } from 'antd';
import styled from 'styled-components';

const Layout = styled.div`
  background-color: white;
`;

function NotFound() {
  return (
    <Layout>
      <Result status="403" title="您尚未登录，请登录后重试" subTitle="401 Not Login" />
    </Layout>
  );
}

export default NotFound;
