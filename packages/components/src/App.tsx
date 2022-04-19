import React from 'react';
import { utils } from 'common';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { Themeable } from '@gmsoft/tt-sdk';
import WhatToEat from './components/WhatToEat';
import { Mode } from './enums/Mode';

const { stateContainer } = utils;

const App = () => (
  <Provider store={stateContainer._store}>
    <Themeable djcGatewayBaseUrl={process.env.REACT_APP_DJC_GATEWAY_BASE} colorScheme="light">
      <Router history={stateContainer._history}>
        <WhatToEat defaultMode={Mode.DRAW} />
      </Router>
    </Themeable>
  </Provider>
);

export default App;
