import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZedinaComponent } from './zedina.component';

describe('ZedinaComponent', () => {
  let component: ZedinaComponent;
  let fixture: ComponentFixture<ZedinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZedinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZedinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
