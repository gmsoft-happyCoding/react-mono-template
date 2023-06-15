import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { useRestore } from 'gm-react-hanger';
import { Themeable } from '@gmsoft/tt-sdk';
import { stateContainer } from 'common/src/utils';
import Home from './app/Home/Home';

const App = () => {
  /**
   * 此hooks可以在页面刷新后恢复子应用(iframe加载)的部分状态:
   * 路由
   * search-page 查询条件
   */
  useRestore(stateContainer._history);

  return (
    <Provider store={stateContainer._store}>
      <Themeable djcGatewayBaseUrl={process.env['gateway.djc']!} colorScheme="light">
        <Router history={stateContainer._history}>
          <Route component={Home} path="/" />
        </Router>
      </Themeable>
    </Provider>
  );
};

export default App;
