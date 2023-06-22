import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogseoComponent } from './blogseo.component';

describe('BlogseoComponent', () => {
  let component: BlogseoComponent;
  let fixture: ComponentFixture<BlogseoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogseoComponent]
    });
    fixture = TestBed.createComponent(BlogseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
