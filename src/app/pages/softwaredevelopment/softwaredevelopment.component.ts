import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-softwaredevelopment',
  templateUrl: './softwaredevelopment.component.html',
  styleUrls: ['./softwaredevelopment.component.css']
})
export class SoftwaredevelopmentComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0); // Set the scroll position to the top of the page
  }

 
}
