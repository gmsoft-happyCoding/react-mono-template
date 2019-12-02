import { actionCreatorFactory } from 'dva-model-creator';
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
export const search = actionCreator<string>('search');
/**
 * 搜索图片
 */
export const searchImg = actionCreator<string>('searchImg');
/**
 * 删除分组
 */
export const setResult = actionCreator<Food>('setResult');
