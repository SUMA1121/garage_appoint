import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-admin',
  templateUrl: './feedback-admin.component.html',
  styleUrls: ['./feedback-admin.component.scss']
})
export class FeedbackAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show=true;
  changeShow(){
    this.show=false;
  }

}
