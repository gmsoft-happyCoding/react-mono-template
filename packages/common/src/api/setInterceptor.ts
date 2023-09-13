import { AxiosError, AxiosInstance } from 'axios';
import { axiosTokenInterceptor } from '@gmsoft/auth-sdk';
import { showNetworkError } from '../utils';
import type { Opts } from './Opts';

export default (instance: AxiosInstance) => {
  instance.interceptors.request.use(axiosTokenInterceptor());

  const errorHandler = (error: AxiosError & { config: Opts }) => {
    if (!error.config.interceptorIgnoreError) showNetworkError(error);
    return Promise.reject(error);
  };

  instance.interceptors.response.use(undefined, errorHandler);
};
