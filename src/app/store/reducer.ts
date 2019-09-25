import { ActionReducer } from '@ngrx/store';
import * as StoreTestActions from './actions';

export interface AppState {
  storeTest: StoreTestState;
}
export interface StoreTestState {
  var1: number;
  var2: number;
}

export const INITIAL_STORE_TEST_STATE: StoreTestState = {
  var1: -5,
  var2: 10
};

export function storeTestReducer(
  state: StoreTestState,
  action: StoreTestActions.all
) {
  switch (action.type) {
    case StoreTestActions.CHANGE:
      return state;
    case StoreTestActions.INCREASE:
      return {
        ...state,
        var1: ++state.var1
      };
    case StoreTestActions.DECREASE:
      return {
        ...state,
        var2: --state.var2
      };
    case StoreTestActions.RESET:
      return Object.assign({}, INITIAL_STORE_TEST_STATE);
    default:
      return state || Object.assign({}, INITIAL_STORE_TEST_STATE);
  }
}

export const StoreTestReducer: ActionReducer<StoreTestState> = storeTestReducer;
