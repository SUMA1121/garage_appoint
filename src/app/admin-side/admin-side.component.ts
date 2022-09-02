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
  onClickUserData(){
    this.router.navigateByUrl('userData')
  }
  onClickAppointmentsBooked(){
    this.router.navigateByUrl('appointmentsBooked')
  }
  onClickCancelAppointments(){
    this.router.navigateByUrl('cancelAppointments')
  }
  
}
