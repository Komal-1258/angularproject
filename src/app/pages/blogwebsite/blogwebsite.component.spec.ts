import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogwebsiteComponent } from './blogwebsite.component';

describe('BlogwebsiteComponent', () => {
  let component: BlogwebsiteComponent;
  let fixture: ComponentFixture<BlogwebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogwebsiteComponent]
    });
    fixture = TestBed.createComponent(BlogwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
