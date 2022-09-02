import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('thankyou') thanks! : ElementRef;
  
  thankYou(){
    this.thanks.nativeElement.innerHtml="Thank You"
  }
  ngAfterViewInit(): void {
    
  }
  show=true;
  thankyou=""
  showThankYou(){
    this.show=false;
    this.thankyou="Thank You"
  }
  

}
