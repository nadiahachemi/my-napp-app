import { Component, OnInit } from "@angular/core";
import { LoginSubmission, UserServiceService } from "../api/user-service.service";
import { Router } from "../../../node_modules/@angular/router";

@Component({
 selector: "app-login",
 templateUrl: "./login.component.html",
 styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
 loginForm: LoginSubmission = new LoginSubmission();

 constructor(public myAuthServ: UserServiceService, public myRouterServ: Router) {}

 ngOnInit() {}

 loginSubmit() {
   // pass the form inputs to the service
   this.myAuthServ
     .postLogin(this.loginForm)
     .then(response => {
       // redirect to the homepage if it's successful
       this.myRouterServ.navigateByUrl("/curls-infos");
     })
     .catch(err => {
       alert("Sorry! There was a problem with your login.");
       console.log(err);
     });
 }
}