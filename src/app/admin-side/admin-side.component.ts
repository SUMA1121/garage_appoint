import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-side',
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.scss']
})
export class AdminSideComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  show=true
  onClickUserData(){
    this.router.navigateByUrl('/adminLogin/admin/userData')
    this.show=false
  }
  onClickAppointmentsBooked(){
    this.router.navigateByUrl('/adminLogin/admin/appointmentsBooked')
    this.show=false
  }
  onClickCancelAppointments(){
    this.router.navigateByUrl('/adminLogin/admin/cancelAppointments')
    this.show=false
  }
  onClickFeedback(){
    this.router.navigateByUrl('/adminLogin/admin/feedbackAdmin')
    this.show=false
  }
}
