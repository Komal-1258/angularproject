import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   
  isNavbarSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarSticky = window.pageYOffset > 0;
  }
   
  showForm: boolean = false;

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  openForm(): void {
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
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
