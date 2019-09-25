import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDisplayBordersComponent } from './store-display-borders.component';

describe('StoreDisplayBordersComponent', () => {
  let component: StoreDisplayBordersComponent;
  let fixture: ComponentFixture<StoreDisplayBordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDisplayBordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDisplayBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
