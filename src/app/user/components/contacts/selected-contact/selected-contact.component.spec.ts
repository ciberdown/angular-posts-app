import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedContactComponent } from './selected-contact.component';

describe('SelectedContactComponent', () => {
  let component: SelectedContactComponent;
  let fixture: ComponentFixture<SelectedContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedContactComponent]
    });
    fixture = TestBed.createComponent(SelectedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
