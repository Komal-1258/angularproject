import { Component } from '@angular/core';

@Component({
  selector: 'app-blogdigital',
  templateUrl: './blogdigital.component.html',
  styleUrls: ['./blogdigital.component.css']
})
export class BlogdigitalComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
