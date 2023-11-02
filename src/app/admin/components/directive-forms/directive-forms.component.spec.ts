import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveFormsComponent } from './directive-forms.component';

describe('DirectiveFormsComponent', () => {
  let component: DirectiveFormsComponent;
  let fixture: ComponentFixture<DirectiveFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveFormsComponent]
    });
    fixture = TestBed.createComponent(DirectiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
