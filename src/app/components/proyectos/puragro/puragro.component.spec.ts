import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuragroComponent } from './puragro.component';

describe('PuragroComponent', () => {
  let component: PuragroComponent;
  let fixture: ComponentFixture<PuragroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuragroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuragroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
