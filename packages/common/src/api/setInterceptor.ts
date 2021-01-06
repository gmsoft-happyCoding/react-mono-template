import { useResponseInterceptor } from './util';
import { showNetworkError } from '../utils';

const errorHandler = error => {
  showNetworkError(error);
  return Promise.reject(error);
};

/* eslint-disable react-hooks/rules-of-hooks */
useResponseInterceptor(undefined, errorHandler);
