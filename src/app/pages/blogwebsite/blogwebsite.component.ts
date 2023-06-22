import { Component } from '@angular/core';

@Component({
  selector: 'app-blogwebsite',
  templateUrl: './blogwebsite.component.html',
  styleUrls: ['./blogwebsite.component.css']
})
export class BlogwebsiteComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
