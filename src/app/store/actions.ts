import { Action } from '@ngrx/store';

export const CHANGE = 'Change';
export class Change implements Action {
  public type = CHANGE;
  constructor() {}
}

export const INCREASE = 'Increase';
export class Increase implements Action {
  public type = INCREASE;
  constructor() {}
}

export const DECREASE = 'Decrease';
export class Decrease implements Action {
  public type = DECREASE;
  constructor() {}
}

export const RESET = 'Reset';
export class Reset implements Action {
  public type = RESET;
  constructor() {}
}

export type all = Change | Increase | Decrease;
