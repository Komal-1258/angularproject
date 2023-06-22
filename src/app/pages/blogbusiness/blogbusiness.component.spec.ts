import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogbusinessComponent } from './blogbusiness.component';

describe('BlogbusinessComponent', () => {
  let component: BlogbusinessComponent;
  let fixture: ComponentFixture<BlogbusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogbusinessComponent]
    });
    fixture = TestBed.createComponent(BlogbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
