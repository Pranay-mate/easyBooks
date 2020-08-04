import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  isActive = false;
  isActive2 = false;
  constructor() { }

  ngOnInit(): void {
  }

}
