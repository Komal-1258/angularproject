import { Component } from '@angular/core';

@Component({
  selector: 'app-blogfinance',
  templateUrl: './blogfinance.component.html',
  styleUrls: ['./blogfinance.component.css']
})
export class BlogfinanceComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
