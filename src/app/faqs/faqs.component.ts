import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit {
  faqs = [
    {question:'Is the one time subscription fee of Rs. 2000 refundable?', ans:'The subscription fee is taken at the time of purchase of subscription. The books provided to students are worth Rs. 2000-2500. That is why, subscription fee is taken in advance and is not refundable.'},
    {question:'Is the one time subscription fee of Rs. 2000 refundable?', ans:'The subscription fee is taken at the time of purchase of subscription. The books provided to students are worth Rs. 2000-2500. That is why, subscription fee is taken in advance and is not refundable.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
