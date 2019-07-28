import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecsaComponent } from './pecsa.component';

describe('PecsaComponent', () => {
  let component: PecsaComponent;
  let fixture: ComponentFixture<PecsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
