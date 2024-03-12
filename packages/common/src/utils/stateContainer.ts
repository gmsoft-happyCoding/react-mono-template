import { create } from 'state-container';
import { Store } from 'redux';
import { History } from 'history';
import { Model } from 'dva';
import history from './history';

export interface StateContainer {
  _store: Store<any>;
  _history: History;
  injectModel: (model: Model, replace?: boolean) => Model;
}

const origin =
  process.env.NODE_ENV === 'development'
    ? `https://${process.env['business.dev-plat-domain']}`
    : undefined;

const stateContainer: StateContainer = create({
  history,
  NODE_ENV: process.env.NODE_ENV,
  useGlobalContextPlugin: true,
  globalContextOpts: {
    appName: '{{projectName}}',
    djcGatewayBaseUrl: process.env['gateway.djc'],
    origin,
    meOrigin: origin,
  },
  onError: (err: any) => {
    // err.preventDefault();
    /* eslint-disable no-console */
    console.error(err);
  },
});

export default stateContainer;
