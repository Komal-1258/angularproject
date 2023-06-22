import { Component } from '@angular/core';

@Component({
  selector: 'app-blogit',
  templateUrl: './blogit.component.html',
  styleUrls: ['./blogit.component.css']
})
export class BlogitComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
