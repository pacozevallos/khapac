import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YakuTravelComponent } from './yaku-travel.component';

describe('YakuTravelComponent', () => {
  let component: YakuTravelComponent;
  let fixture: ComponentFixture<YakuTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YakuTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YakuTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
