import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbisuRestobarComponent } from './ebisu-restobar.component';

describe('EbisuRestobarComponent', () => {
  let component: EbisuRestobarComponent;
  let fixture: ComponentFixture<EbisuRestobarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbisuRestobarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbisuRestobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
