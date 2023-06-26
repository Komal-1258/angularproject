import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})


export class ImagesliderComponent {
  private images: Image[];
  private currentIndex: number;
  private imagesPerRow: number;

  constructor() {
    this.images = [
      { src: '../assets/angry-owl_logo.png', alt: 'Image 1'},
      { src: '../assets/ambient-civil_logo-removebg-preview.png', alt: 'Image 2' },
      { src: '../assets/bc.png', alt: 'Image 3' },
      { src: '../assets/Blue-Boa-trans.png', alt: 'Image 4 ' },
      { src: '../assets/branches.png', alt: 'Image 5' },
      { src: '../assets/epsom-removebg-preview.png', alt: 'Image 6' },
      { src: '../assets/ff.png', alt: 'Image 7' },
      { src: '../assets/jp-logo.png', alt: 'Image 8' },
      { src: '../assets/kinaray-logo.png', alt: 'Image 9' },
      { src: '../assets/mytree-logo-removebg-preview.png', alt: 'Image 10' },
      { src: '../assets/watt-logo.png', alt: 'Image 11' },
      { src: '../assets/wl.png', alt: 'Image 12' },
    ];
    this.currentIndex = 0;
    this.imagesPerRow = 3;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  getVisibleImages(): Image[] {
    const startIndex = this.currentIndex;
    const endIndex = (startIndex + this.imagesPerRow) % this.images.length;
    if (startIndex <= endIndex) {
      return this.images.slice(startIndex, endIndex + 1);
    } else {
      return [...this.images.slice(startIndex), ...this.images.slice(0, endIndex + 1)];
    }
  }
}

