/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2021-03-11 14:38:41
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2021-04-12 17:45:24
 * @Description: Nothing
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoadingBlock from 'common/src/components/LoadingBlock';
import { useSearchParams } from 'common/src/hooks';
import NotLogin from '@/app/Exception/401';
import NotAuth from '@/app/Exception/403';
import NotFound from '@/app/Exception/404';
import { Layout } from './style';
import { menuConf, pathConf } from './menuConf';
import { getFlattenedRoutes } from './getFlattenedRoutes';

const routerConf = getFlattenedRoutes(menuConf);

function HomeContent() {
  const { independent = true } = useSearchParams();

  // 根据实际路由结果，按需渲染需要的路由
  return (
    <Layout haspadding={independent}>
      <React.Suspense fallback={<LoadingBlock />}>
        <Switch>
          {routerConf.map(item => (
            <Route key={item.path} path={item.path} component={item.component} />
          ))}
          <Route
            key={pathConf.PATH_EXCEPTION_401}
            path={pathConf.PATH_EXCEPTION_401}
            component={NotLogin}
          />
          <Route
            key={pathConf.PATH_EXCEPTION_403}
            path={pathConf.PATH_EXCEPTION_403}
            component={NotAuth}
          />
          <Route
            key={pathConf.PATH_EXCEPTION_404}
            path={pathConf.PATH_EXCEPTION_404}
            component={NotFound}
          />
          {/* <Redirect to={pathConf.PATH_BUSINESS_HALL} from="/" exact /> */}
          <Redirect to={pathConf.PATH_EXCEPTION_404} />
        </Switch>
      </React.Suspense>
    </Layout>
  );
}

export default HomeContent;
