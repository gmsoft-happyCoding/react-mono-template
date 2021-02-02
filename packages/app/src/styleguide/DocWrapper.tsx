import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { utils } from 'common';

const { stateContainer } = utils;

type Props = {
  children: ReactElement<any>;
};

const DocWrapper = ({ children }: Props) => (
  <Provider store={stateContainer._store}>{children}</Provider>
);

export default DocWrapper;
