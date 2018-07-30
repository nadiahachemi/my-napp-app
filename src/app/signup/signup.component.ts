import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from '../../../node_modules/ng2-file-upload';
import { UserServiceService, SignupSubmission } from '../api/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']


})export class SignupComponent implements OnInit {
  signupForm: SignupSubmission= new SignupSubmission();
 


  constructor(public myUserServ: UserServiceService, public myRouterServ: Router) { }




  ngOnInit() {
  }
signupSubmit(){
  this.myUserServ.postSignup(this.signupForm)
  .then((response)=>{
    this.myRouterServ.navigateByUrl("/");
  })
  // .catch((err)=>{
  //   alert('Sorry, again, we failed');
  //   console.log(err);
  // })
}
}


