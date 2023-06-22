import { Component } from '@angular/core';

@Component({
  selector: 'app-blogwordpress',
  templateUrl: './blogwordpress.component.html',
  styleUrls: ['./blogwordpress.component.css']
})
export class BlogwordpressComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
