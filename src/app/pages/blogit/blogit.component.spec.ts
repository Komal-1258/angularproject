import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogitComponent } from './blogit.component';

describe('BlogitComponent', () => {
  let component: BlogitComponent;
  let fixture: ComponentFixture<BlogitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogitComponent]
    });
    fixture = TestBed.createComponent(BlogitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
