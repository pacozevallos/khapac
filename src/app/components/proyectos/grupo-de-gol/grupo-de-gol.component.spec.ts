import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDeGolComponent } from './grupo-de-gol.component';

describe('GrupoDeGolComponent', () => {
  let component: GrupoDeGolComponent;
  let fixture: ComponentFixture<GrupoDeGolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoDeGolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoDeGolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
