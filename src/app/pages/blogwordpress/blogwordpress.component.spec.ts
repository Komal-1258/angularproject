import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogwordpressComponent } from './blogwordpress.component';

describe('BlogwordpressComponent', () => {
  let component: BlogwordpressComponent;
  let fixture: ComponentFixture<BlogwordpressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogwordpressComponent]
    });
    fixture = TestBed.createComponent(BlogwordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
