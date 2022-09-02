import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  data:any;
  getData(val:any){
    this.data=val;
    console.log(this.data);
    
  }
  checkAvail="Check Availability"
  disable=true;
  isAvailable(){
    this.checkAvail="Available"
    this.disable=false;
  }
  showFeedback(){
    this.router.navigateByUrl('feedbackUser');
  
  }
}
