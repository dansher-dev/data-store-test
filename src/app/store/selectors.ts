import { AppState, StoreTestState } from './reducer';
import { createSelector, MemoizedSelector } from '@ngrx/store';

export const storeStateFeature = (state: AppState) => state.storeTest;

export const selectVar1 = createSelector(
  storeStateFeature, (state: StoreTestState) => state.var1
);

export const selectVar2 = createSelector(
  storeStateFeature, (state: StoreTestState) => state.var2
);
