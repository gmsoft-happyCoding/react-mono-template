import { api, utils } from 'common';
import { Model } from 'dva';
import { Food } from '../../types/Food.d';
import wrappedWhatToEatActions from './whatToEat.action';

const { unwrapActions } = utils;
const whatToEatActions = unwrapActions(wrappedWhatToEatActions);

const defaultState = () => ({} as Food);

export default {
  namespace: 'whatToEat',
  state: defaultState(),
  reducers: {
    setResult(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // 随机抽取
    *draw(_, { call, put }) {
      try {
        // 通过接口随机获取今天吃什么?
        const {
          data: { name },
        } = yield call(api.whatToEat.what_to_eat_get);
        yield put(whatToEatActions.searchImg(name));
        yield put(whatToEatActions.setResult({ name }));
      } catch (e) {
        utils.popup.error(`[luckyDraw] 请求失败, ${e.message}`);
      }
    },
    // 搜索
    *search({ payload }, { put }) {
      try {
        yield put(whatToEatActions.searchImg(payload));
        yield put(whatToEatActions.setResult({ name: payload }));
      } catch (e) {
        utils.popup.error(`[luckyDraw] 请求失败, ${e.message}`);
      }
    },
    // 搜索图片
    *searchImg({ payload }, { call, put }) {
      const BASE = 10;
      // eslint-disable-next-line no-bitwise
      const random = ((Math.random() * 10000) | 0) % BASE;
      try {
        // 通过接口随机获取今天吃的东西的图片
        const {
          data: { list },
        } = yield call(api.whatToEat.img_get, {
          params: {
            q: payload,
            sn: random,
            pn: BASE,
          },
        });
        // 保存数据到store
        if (list && list.length > 0) {
          yield put(
            whatToEatActions.setResult({
              img: list[Math.max(random, list.length - 1)].img,
            })
          );
        }
      } catch (e) {
        utils.popup.error(`[luckyDraw] 请求失败, ${e.message}`);
      }
    },
  },
} as Model;
