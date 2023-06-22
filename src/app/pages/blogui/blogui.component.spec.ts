import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloguiComponent } from './blogui.component';

describe('BloguiComponent', () => {
  let component: BloguiComponent;
  let fixture: ComponentFixture<BloguiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloguiComponent]
    });
    fixture = TestBed.createComponent(BloguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
