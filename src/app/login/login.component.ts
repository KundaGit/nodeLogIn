import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;

  constructor(private http:HttpClient, private _route:Router){}
ngOnInit(): void {
  this.login=new FormGroup({
    'fname':new FormControl(),
    'password': new FormControl()
  })
}

logindata(login:FormGroup){
console.log(this.login.value)
this.http.get<any>("http://localhost:3000/signup")
.subscribe(res=>{
  const user=res.find((a:any)=>{
    return a.fname===this.login.value.fname && a.password=== this.login.password
  });
  if(user){
    alert('u are succesfully login')
    this.login.reset()
    this._route.navigate(['dashboard'])
  } else {
    alert("user  Not Found")
    this._route.navigate(['login'])
  }
},err=>{
  alert("Something was wrong")
})

}
sbtn1(){
  $('.form-box').css('display','none');
  $('.form-box1').css('display','block');
}
 
}


