import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { utils } from 'common';

type Props = {
  children: ReactElement<any>;
};

const Wrapper = ({ children }: Props) => (
  <Provider store={utils.stateContainer._store}>{children}</Provider>
);

export default Wrapper;
