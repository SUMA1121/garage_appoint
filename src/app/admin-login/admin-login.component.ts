import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  show=true
    getData(){
    console.log(this.adminLoginForm.value)
    this.show=false;
    this.router.navigateByUrl("/adminLogin/admin");
  }
 
  
  
  adminLoginForm=new FormGroup({
    
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  get email(){
    return this.adminLoginForm.get('email')
  }
  get password(){
    return this.adminLoginForm.get('password')
  }



}
