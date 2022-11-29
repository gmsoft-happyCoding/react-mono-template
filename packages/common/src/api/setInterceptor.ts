import { useRequestInterceptor, useResponseInterceptor } from './util';
import { showNetworkError } from '../utils';
import { axiosTokenInterceptor } from '@gmsoft/auth-sdk';

useRequestInterceptor(axiosTokenInterceptor());

const errorHandler = error => {
  showNetworkError(error);
  return Promise.reject(error);
};

/* eslint-disable react-hooks/rules-of-hooks */
useResponseInterceptor(undefined, errorHandler);
