import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogmobileaapsComponent } from './blogmobileaaps.component';

describe('BlogmobileaapsComponent', () => {
  let component: BlogmobileaapsComponent;
  let fixture: ComponentFixture<BlogmobileaapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogmobileaapsComponent]
    });
    fixture = TestBed.createComponent(BlogmobileaapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
