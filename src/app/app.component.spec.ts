import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoreDisplayComponent } from './store-display/store-display.component';
import { StoreDisplayBordersComponent } from './store-display/store-display-borders/store-display-borders.component';
import { StoreModule } from '@ngrx/store';
import { StoreTestReducer } from './store/reducer';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StoreDisplayComponent,
        StoreDisplayBordersComponent
      ],
      imports: [StoreModule.forRoot({ storeTest: StoreTestReducer })]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
