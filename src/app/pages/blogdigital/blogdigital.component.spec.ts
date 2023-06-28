import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdigitalComponent } from './blogdigital.component';

describe('BlogdigitalComponent', () => {
  let component: BlogdigitalComponent;
  let fixture: ComponentFixture<BlogdigitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogdigitalComponent]
    });
    fixture = TestBed.createComponent(BlogdigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
