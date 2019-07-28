import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaPrevisoraComponent } from './la-previsora.component';

describe('LaPrevisoraComponent', () => {
  let component: LaPrevisoraComponent;
  let fixture: ComponentFixture<LaPrevisoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaPrevisoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaPrevisoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
