import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedUserComponent } from './show-selected-user.component';

describe('ShowSelectedUserComponent', () => {
  let component: ShowSelectedUserComponent;
  let fixture: ComponentFixture<ShowSelectedUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSelectedUserComponent]
    });
    fixture = TestBed.createComponent(ShowSelectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
