import { Component } from '@angular/core';

@Component({
  selector: 'app-blogcustom',
  templateUrl: './blogcustom.component.html',
  styleUrls: ['./blogcustom.component.css']
})
export class BlogcustomComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
