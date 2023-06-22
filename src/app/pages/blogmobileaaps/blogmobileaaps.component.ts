import { Component } from '@angular/core';

@Component({
  selector: 'app-blogmobileaaps',
  templateUrl: './blogmobileaaps.component.html',
  styleUrls: ['./blogmobileaaps.component.css']
})
export class BlogmobileaapsComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
