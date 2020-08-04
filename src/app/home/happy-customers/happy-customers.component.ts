import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-happy-customers',
  templateUrl: './happy-customers.component.html',
  styleUrls: ['./happy-customers.component.css']
})
export class HappyCustomersComponent implements OnInit, OnDestroy {
title = 'flex';
mediaSub:Subscription;
deviceXs:boolean;
  constructor(public mediaObserver:MediaObserver) { }

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}
