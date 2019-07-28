import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SineaceComponent } from './sineace.component';

describe('SineaceComponent', () => {
  let component: SineaceComponent;
  let fixture: ComponentFixture<SineaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SineaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SineaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
