import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyotaTsushoComponent } from './toyota-tsusho.component';

describe('ToyotaTsushoComponent', () => {
  let component: ToyotaTsushoComponent;
  let fixture: ComponentFixture<ToyotaTsushoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyotaTsushoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyotaTsushoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
