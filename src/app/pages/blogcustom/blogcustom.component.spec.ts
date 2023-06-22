import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcustomComponent } from './blogcustom.component';

describe('BlogcustomComponent', () => {
  let component: BlogcustomComponent;
  let fixture: ComponentFixture<BlogcustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogcustomComponent]
    });
    fixture = TestBed.createComponent(BlogcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
