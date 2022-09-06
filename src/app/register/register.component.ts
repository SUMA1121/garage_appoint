import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  data:any;
  getData(){
    console.log(this.registerForm.value)
    
  }
  onClickRegister(){
    this.router.navigateByUrl('/userLogin')
  }

  registerForm=new FormGroup({
    name:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    address:new FormControl('',[Validators.required, Validators.minLength(20)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password:new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  get name(){
    return this.registerForm.get('name')
  }

  get address(){
    return this.registerForm.get('address')
  }

  get email(){
    return this.registerForm.get('email')
  }

  get phone(){
    return this.registerForm.get('phone')
  }

  get password(){
    return this.registerForm.get('password')
  }
}
