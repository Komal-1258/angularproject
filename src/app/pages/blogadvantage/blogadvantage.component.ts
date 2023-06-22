import { Component } from '@angular/core';

@Component({
  selector: 'app-blogadvantage',
  templateUrl: './blogadvantage.component.html',
  styleUrls: ['./blogadvantage.component.css']
})
export class BlogadvantageComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
