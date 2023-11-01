import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedPostComponent } from './show-selected-post.component';

describe('ShowSelectedPostComponent', () => {
  let component: ShowSelectedPostComponent;
  let fixture: ComponentFixture<ShowSelectedPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSelectedPostComponent]
    });
    fixture = TestBed.createComponent(ShowSelectedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
