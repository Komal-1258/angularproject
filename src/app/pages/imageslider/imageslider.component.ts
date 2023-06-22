import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent  {
  images: string[] = [
    '../assets/angry-owl_logo.png',
    '../assets/ambient-civil_logo-removebg-preview.png',
    '../assets/bc.png',
    '../assets/Blue-Boa-trans.png',
    '../assets/branches.png',
    '../assets/epsom-removebg-preview.png',
    '../assets/ff.png',
    '../assets/jp-logo.png',
    '../assets/kinaray-logo.png',
    '../assets/mytree-logo-removebg-preview.png',
    '../assets/watt-logo.png',
    '../assets/wl.png',
    
  ];

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
      // Configure additional Swiper options here if needed
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }
}
