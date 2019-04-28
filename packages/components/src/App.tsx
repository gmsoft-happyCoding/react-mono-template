import { utils } from 'common';
import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import WhatToEat from './components/WhatToEat';
import { Mode } from './enums/Mode';

const { stateContainer } = utils;

const App = () => (
  <Provider store={stateContainer._store}>
    <Router history={stateContainer._history}>
      <WhatToEat defaultMode={Mode.DRAW} />
    </Router>
  </Provider>
);

// @ts-ignore
setConfig({ pureSFC: true });
export default hot(module)(App);
