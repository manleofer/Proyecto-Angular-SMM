import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosInsertComponent } from './formularios-insert.component';

describe('FormulariosInsertComponent', () => {
  let component: FormulariosInsertComponent;
  let fixture: ComponentFixture<FormulariosInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
