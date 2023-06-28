import { Component } from '@angular/core';

@Component({
  selector: 'app-blogcommon',
  templateUrl: './blogcommon.component.html',
  styleUrls: ['./blogcommon.component.css']
})
export class BlogcommonComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
