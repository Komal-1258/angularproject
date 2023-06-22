import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
 

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }

  constructor(private router: Router, private elementRef: ElementRef) { }

redirectToTargetPage() {
  const targetSectionId = 'application';
  this.router.navigate(['/softwaredevelopment'], { fragment: targetSectionId });
  
}

ngAfterViewInit() {
  const redirectLink = this.elementRef.nativeElement.querySelector('#redirectLink');
  redirectLink.href = '/softwaredevelopment#' + 'application';
}

}
