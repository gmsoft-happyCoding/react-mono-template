/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2021-03-11 14:38:48
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2021-03-23 10:20:30
 * @Description: Nothing
 */
import React, { useCallback, MouseEvent, useState, useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useMe } from '@gmsoft/auth-sdk';
import { Layout, Menu, Icon } from 'antd';
import IframeFindFocus from 'common/src/components/IframeFindFocus';
import LoadingBlock from 'common/src/components/LoadingBlock';
import { isNil } from 'lodash';
import { LoggoBox, Content, MenuLayout } from './style';
import HomeContent from './HomeContent';
import { RouteObj, menuConf } from './menuConf';

// 渲染 菜单项
function renderMenu(routes: Array<RouteObj>): React.ReactNode {
  return routes.map(item => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} title={item.name}>
          {renderMenu(item.children)}
        </Menu.SubMenu>
      );
    }
    return item.display !== false ? (
      <Menu.Item key={item.key}>
        {item.icon ? <Icon type={item.icon} /> : null}
        {item.name}
      </Menu.Item>
    ) : null;
  });
}

type Props = {};

function Home(props: Props & RouteComponentProps) {
  // 取得用户信息
  const userInfo = useMe();
  const [isDebug, setIsDebug] = useState(false);
  const switchDebugCb = useCallback(
    (e: MouseEvent) => {
      if (e.altKey && e.shiftKey) {
        setIsDebug(!isDebug);
      }
    },
    [isDebug]
  );
  // 是否已经登陆，用于控制是否渲染实际组件
  // menu click 事件
  const clickMenu = ({ key }) => {
    const { history } = props;
    history.push(key);
  };

  const isLogined = useMemo(() => !isNil(userInfo), [userInfo]);

  // Debug模式渲染菜单，shift+alt+鼠标左键双击，打开Debug模式
  if (!isDebug) {
    return isLogined ? (
      <div onDoubleClick={switchDebugCb}>
        <HomeContent />
      </div>
    ) : (
      <LoadingBlock />
    );
  }
  return (
    <Layout onDoubleClick={switchDebugCb}>
      <IframeFindFocus />
      <Layout.Sider
        width={250}
        style={{ overflow: 'auto', minHeight: '100vh', position: 'fixed', left: 0 }}
      >
        <LoggoBox>{{}}</LoggoBox>
        <MenuLayout>
          <Menu mode="inline" theme="dark" onClick={clickMenu}>
            {renderMenu(menuConf)}
          </Menu>
        </MenuLayout>
      </Layout.Sider>
      <Content className="print-loyout">{isLogined ? <HomeContent /> : <LoadingBlock />}</Content>
    </Layout>
  );
}

export default Home;
