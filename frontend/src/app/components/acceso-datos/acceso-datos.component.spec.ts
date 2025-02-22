import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoDatosComponent } from './acceso-datos.component';

describe('AccesoDatosComponent', () => {
  let component: AccesoDatosComponent;
  let fixture: ComponentFixture<AccesoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
