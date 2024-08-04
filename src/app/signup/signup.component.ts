import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private _route: Router, private _http: HttpClient, private _toast: ToastrService) { }
  signup: FormGroup | any;
  signupuser: any
  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'email': new FormControl(),
      'phone': new FormControl(),
      'password': new FormControl()
    })
  }

  signUpdata(signup: FormGroup) {
    console.log(this.signup.value.fname)
    this._http.post<any>("http://localhost:3000/signup", this.signup.value)
      .subscribe(res => {
        this._toast.success(this.signupuser, "You are Successfully SignUp");
        this.signup.reset();
        this._route.navigate(['signup'])

      },err=>{
        alert("Something Went wrong")
      })

  }

  sbtn(){
    this._route.navigate(['login']);
    $('.form-box').css('display','block');
    $('.form-box1').css('display','none')
  }



}
