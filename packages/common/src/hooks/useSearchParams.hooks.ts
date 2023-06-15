/*
 * @Author: Gmsoft - WeiHong Ran
 * @Date: 2021-03-22 18:12:35
 * @LastEditors: Gmsoft - WeiHong Ran
 * @LastEditTime: 2021-03-22 18:39:08
 * @Description: Nothing
 */

import { parseSearch } from '@gmsoft/tools';

/**
 * 解析search参数
 * @param isTop 是否使用顶层search
 */
export function useSearchParams<T = any>(isTop?: boolean) {
  let params: T = {} as T;
  try {
    params = parseSearch(isTop ? window.top.location.search : window.location.search);
    return params;
  } catch (error) {
    params = parseSearch(window.location.search);
  }
  return params;
}
