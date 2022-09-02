import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  data:any;
  getData(val:any){
    this.data=val;
    console.log(this.data);
    
  }

  onUserLoginClick(){
    this.router.navigateByUrl('/user');
  }
  onClickReset(){
    this.router.navigateByUrl('/reset');
  }
}
