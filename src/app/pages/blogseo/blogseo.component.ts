import { Component } from '@angular/core';

@Component({
  selector: 'app-blogseo',
  templateUrl: './blogseo.component.html',
  styleUrls: ['./blogseo.component.css']
})
export class BlogseoComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
