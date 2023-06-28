import { Component } from '@angular/core';

@Component({
  selector: 'app-blogtips',
  templateUrl: './blogtips.component.html',
  styleUrls: ['./blogtips.component.css']
})
export class BlogtipsComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
