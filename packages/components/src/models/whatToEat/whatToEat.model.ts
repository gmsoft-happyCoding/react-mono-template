import { DvaModelBuilder } from 'dva-model-creator';
import { constant } from 'common';
import type { Food } from '@/types/Food';
import { reset } from './whatToEat.actions';
import drawHandler from './handler/draw.handler';
import { searchFoodHandler } from './handler';

const {
  namespace: { WHAT_TO_EAT },
} = constant;

export type State = Food;
export interface WhatToEatState {
  [WHAT_TO_EAT]: Food;
}

const defaultState = () => ({ name: '', img: undefined });

const modelBuilder = new DvaModelBuilder<State>(defaultState(), WHAT_TO_EAT);

modelBuilder.case(reset, defaultState);

drawHandler(modelBuilder);
searchFoodHandler(modelBuilder);

export default modelBuilder.build();
