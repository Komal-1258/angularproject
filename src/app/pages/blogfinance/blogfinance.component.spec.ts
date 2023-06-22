import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogfinanceComponent } from './blogfinance.component';

describe('BlogfinanceComponent', () => {
  let component: BlogfinanceComponent;
  let fixture: ComponentFixture<BlogfinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogfinanceComponent]
    });
    fixture = TestBed.createComponent(BlogfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
