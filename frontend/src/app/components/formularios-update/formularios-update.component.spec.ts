import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosUpdateComponent } from './formularios-update.component';

describe('FormulariosUpdateComponent', () => {
  let component: FormulariosUpdateComponent;
  let fixture: ComponentFixture<FormulariosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
