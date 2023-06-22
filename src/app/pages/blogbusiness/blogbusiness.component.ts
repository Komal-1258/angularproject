import { Component } from '@angular/core';

@Component({
  selector: 'app-blogbusiness',
  templateUrl: './blogbusiness.component.html',
  styleUrls: ['./blogbusiness.component.css']
})
export class BlogbusinessComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
