import { hot } from 'react-hot-loader/root';
import { utils } from 'common';
import React from 'react';
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

export default hot(App);
