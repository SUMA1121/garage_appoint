import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getData(){
  console.log(this.userLoginForm.value)
  
  this.router.navigateByUrl("/userLogin/user");
}

userLoginForm=new FormGroup({
  
  email:new FormControl('', [Validators.required, Validators.email]),
  password:new FormControl('', [Validators.required, Validators.minLength(6)])
})
get email(){
  return this.userLoginForm.get('email')
}
get password(){
  return this.userLoginForm.get('password')
}

}
