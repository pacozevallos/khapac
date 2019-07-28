import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitecComponent } from './orbitec.component';

describe('OrbitecComponent', () => {
  let component: OrbitecComponent;
  let fixture: ComponentFixture<OrbitecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
