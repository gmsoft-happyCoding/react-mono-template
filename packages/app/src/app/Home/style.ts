/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2021-03-11 14:38:48
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2021-03-12 14:58:20
 * @Description: Nothing
 */
import styled from 'styled-components';
import { Layout as _Layout } from 'antd';
import judgeIframe from 'common/src/utils/judgeIframe';

export const LoggoBox = styled.div`
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
  font-size: 22px;
  padding: 10px 0;
  color: #ffffff;
  font-family: xdn;
`;

export const Content = styled.div`
  position: ${judgeIframe ? 'absolute' : 'relative'};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: ${judgeIframe ? '250px' : 0};
  min-width: 1150px;
  background: #f0f2f5;

  @media print {
    & {
      margin-left: 0 !important;
    }
  }
`;

export const Layout = styled(_Layout)<{ haspadding?: boolean }>`
  padding: ${props => (props.haspadding ? 15 : 0)}px;
  background-color: white;
`;

export const MenuLayout = styled.div`
  .ant-menu-item {
    font-family: xdn;
    font-size: 16px;
  }
`;
