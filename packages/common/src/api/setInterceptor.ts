import { AxiosInstance } from 'axios';
import { axiosTokenInterceptor } from '@gmsoft/auth-sdk';
import { showNetworkError } from '../utils';

export default (instance: AxiosInstance) => {
  instance.interceptors.request.use(axiosTokenInterceptor());

  const errorHandler = error => {
    showNetworkError(error);
    return Promise.reject(error);
  };

  instance.interceptors.response.use(undefined, errorHandler);
};
