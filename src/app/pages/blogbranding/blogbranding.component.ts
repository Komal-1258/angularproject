import { Component } from '@angular/core';

@Component({
  selector: 'app-blogbranding',
  templateUrl: './blogbranding.component.html',
  styleUrls: ['./blogbranding.component.css']
})
export class BlogbrandingComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
