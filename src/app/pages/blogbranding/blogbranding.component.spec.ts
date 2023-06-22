import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogbrandingComponent } from './blogbranding.component';

describe('BlogbrandingComponent', () => {
  let component: BlogbrandingComponent;
  let fixture: ComponentFixture<BlogbrandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogbrandingComponent]
    });
    fixture = TestBed.createComponent(BlogbrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
