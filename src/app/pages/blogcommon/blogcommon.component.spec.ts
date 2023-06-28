import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcommonComponent } from './blogcommon.component';

describe('BlogcommonComponent', () => {
  let component: BlogcommonComponent;
  let fixture: ComponentFixture<BlogcommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogcommonComponent]
    });
    fixture = TestBed.createComponent(BlogcommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
