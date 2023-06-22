import { Component } from '@angular/core';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.component.html',
  styleUrls: ['./digital.component.css']
})
export class DigitalComponent {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }
}
