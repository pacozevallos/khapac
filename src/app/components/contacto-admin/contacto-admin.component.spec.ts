import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoAdminComponent } from './contacto-admin.component';

describe('ContactoAdminComponent', () => {
  let component: ContactoAdminComponent;
  let fixture: ComponentFixture<ContactoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
