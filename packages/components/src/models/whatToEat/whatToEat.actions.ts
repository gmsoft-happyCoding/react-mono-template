import { actionCreatorFactory } from 'dva-model-creator';
import { AxiosError } from 'axios';
import { constant } from 'common';
import { Food } from '@/types/Food.d';

const {
  namespace: { WHAT_TO_EAT },
} = constant;

const actionCreator = actionCreatorFactory(WHAT_TO_EAT);

/**
 * 随机抽取
 */
export const draw = actionCreator<void>('draw');

/**
 * 关键字搜索
 */
export const searchFood = actionCreator.async<string, Food, AxiosError>('searchFood');

/**
 * 重置store
 */
export const reset = actionCreator<void>('reset');
