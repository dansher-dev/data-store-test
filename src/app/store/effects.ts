import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as StoreTestActions from './actions';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreEffects {
  @Effect()
  public changeVariables$ = this.actions$
    .pipe(
      ofType(StoreTestActions.CHANGE),
      switchMap(() =>
        [
          new StoreTestActions.Increase(),
          new StoreTestActions.Decrease(),
          new StoreTestActions.Decrease(),
        ])
    );

  constructor(
    private actions$: Actions,
  ) {}
}
