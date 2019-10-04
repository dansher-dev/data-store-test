import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDisplayComponent } from './store-display.component';
import { StoreDisplayBordersComponent } from './store-display-borders/store-display-borders.component';
import { StoreModule } from '@ngrx/store';
import { StoreTestReducer } from '../store/reducer';

describe('StoreDisplayComponent', () => {
  let component: StoreDisplayComponent;
  let fixture: ComponentFixture<StoreDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDisplayComponent,
        StoreDisplayBordersComponent
      ],
      imports: [
        StoreModule.forRoot({ storeTest: StoreTestReducer }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be -5 and 10 on init', () => {
    expect(component.var1).toBe(-5);
    expect(component.var2).toBe(10);
  });
});
