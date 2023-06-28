import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogtipsComponent } from './blogtips.component';

describe('BlogtipsComponent', () => {
  let component: BlogtipsComponent;
  let fixture: ComponentFixture<BlogtipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogtipsComponent]
    });
    fixture = TestBed.createComponent(BlogtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
