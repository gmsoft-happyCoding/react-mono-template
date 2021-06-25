import { create } from 'state-container';
// @ts-ignore
import { Store } from 'redux';
// @ts-ignore
import { History } from 'history';
import { Model } from 'dva';
import history from './history';

export interface StateContainer {
  _store: Store<any>;
  _history: History;
  injectModel: (model: Model, replace?: boolean) => Model;
}

const stateContainer: StateContainer = create({
  history,
  NODE_ENV: process.env.NODE_ENV,
  useGlobalContextPlugin: true,
  globalContextOpts: {
    appName: '{{projectName}}',
    djcGatewayBaseUrl: process.env.REACT_APP_DJC_GATEWAY_BASE,
  },
  onError: (err: any) => {
    // err.preventDefault();
    /* eslint-disable no-console */
    console.error(err);
  },
});

export default stateContainer;
