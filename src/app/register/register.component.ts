import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  getData(val:any){
    this.data=val;
    console.log(this.data);
    
  }
  onClickRegister(){
    this.router.navigateByUrl('userLogin')
  }
}
