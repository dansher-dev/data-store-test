import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreDisplayComponent } from './store-display/store-display.component';
import { StoreDisplayBordersComponent } from './store-display/store-display-borders/store-display-borders.component';
import { StoreModule } from '@ngrx/store';
import { StoreTestReducer } from './store/reducer';
import { StoreEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    StoreDisplayComponent,
    StoreDisplayBordersComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({storeTest: StoreTestReducer}),
    EffectsModule.forRoot([StoreEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
