import { get } from 'lodash';
import { notification } from '@gmsoft/ui';

function getErrorMsg(e: Error) {
  const msgDetail = e.message;
  if (msgDetail.includes('Timeout')) {
    return '操作失败，请稍等片刻后重试';
  }
  if (msgDetail.includes('Service unavailable')) {
    return '服务不可用，请确认应用服务是否启动';
  }
  if (msgDetail.includes('not a function')) {
    return '函数调用异常，调用的目标属性，不是函数';
  }
  if (msgDetail.includes('undefine')) {
    return `空指针异常:${e.message}`;
  }
  return msgDetail;
}

function teyGetError(error, defStr?: string) {
  return get(error, 'response.data.msg') || get(error, 'response.data.message') || defStr;
}

export default error => {
  let errMsg = '未知错误';

  if (error.response) {
    switch (error.response.status) {
      case 400:
        errMsg = teyGetError(error, errMsg);
        break;
      case 401:
        errMsg = '您的登录信息已失效！';
        // history.push('/error/401');
        break;
      case 403:
        errMsg = '您没有权限进行该操作！';
        // history.push('/error/403');
        break;
      case 404:
        errMsg = '未找到相关服务！';
        // history.push('/error/404');
        break;
      case 405:
        errMsg = '请求被拦截！';
        break;
      case 414:
        errMsg = '请求地址过长！';
        break;
      case 500:
        errMsg = getErrorMsg(new Error(teyGetError(error, '服务器内部错误！')));
        // history.push('/error/500');

        break;
      case 502:
        errMsg = `服务器内部错误，${get(error, 'response.statusText')}`;
        // history.push('/error/500');
        break;
      default:
        errMsg = teyGetError(error, errMsg);
    }
  }

  notification.error({
    message: '请求错误!',
    description: errMsg,
  });
};
