import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogadvantageComponent } from './blogadvantage.component';

describe('BlogadvantageComponent', () => {
  let component: BlogadvantageComponent;
  let fixture: ComponentFixture<BlogadvantageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogadvantageComponent]
    });
    fixture = TestBed.createComponent(BlogadvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
