import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsalesComponent } from './blogsales.component';

describe('BlogsalesComponent', () => {
  let component: BlogsalesComponent;
  let fixture: ComponentFixture<BlogsalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsalesComponent]
    });
    fixture = TestBed.createComponent(BlogsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
