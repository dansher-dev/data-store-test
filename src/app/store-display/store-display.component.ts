import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/reducer';
import { Change, Reset } from '../store/actions';
import * as StoreSelectors from '../store/selectors';
import { interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-store-display',
  templateUrl: './store-display.component.html',
  styleUrls: ['./store-display.component.css']
})
export class StoreDisplayComponent implements OnInit, OnDestroy {

  public var1: number;
  public var2: number;
  private interval: Subscription;
  private unsubscribeAll$: Subject<boolean> = new Subject();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store
      .pipe(
        select(StoreSelectors.selectVar1),
        takeUntil(this.unsubscribeAll$),
        )
      .subscribe((var1) => this.var1 = var1);
    this.store
      .pipe(
        select(StoreSelectors.selectVar2),
        takeUntil(this.unsubscribeAll$),
      )
      .subscribe((var2) => this.var2 = var2);
  }

  public onAppStart(): void {
    const intervalCounter = interval(1000);
    this.interval = intervalCounter.subscribe(() => this.store.dispatch(new Change()));
  }

  public onAppStop(): void {
    this.interval.unsubscribe();
  }

  public onAppReset(): void {
    this.store.dispatch(new Reset());
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next(true);
    this.unsubscribeAll$.complete();
  }

}
