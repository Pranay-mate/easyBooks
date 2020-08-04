import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

 images = "../assets/dark.jpeg";
 links = ['First', 'Second', 'Third','fgv','hgc','hgcg','hthj', 'Third','fgv','hgc','hgcg','hthj'];
  activeLink = this.links[0];

    constructor() { }

    ngOnInit(): void {
    }


}
