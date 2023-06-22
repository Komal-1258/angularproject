import { Component } from '@angular/core';

@Component({
  selector: 'app-blogsales',
  templateUrl: './blogsales.component.html',
  styleUrls: ['./blogsales.component.css']
})
export class BlogsalesComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
