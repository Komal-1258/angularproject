import { Component } from '@angular/core';

@Component({
  selector: 'app-blogui',
  templateUrl: './blogui.component.html',
  styleUrls: ['./blogui.component.css']
})
export class BloguiComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
