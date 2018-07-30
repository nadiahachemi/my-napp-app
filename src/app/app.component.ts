import { Component } from "@angular/core";
import { UserServiceService } from "./api/user-service.service";
import { Router } from "../../node_modules/@angular/router";

@Component({
 selector: "app-root",
 templateUrl: "./app.component.html",
 styleUrls: ["./app.component.css"]
})
export class AppComponent {
 title = "app";

 constructor(public myUserServ: UserServiceService, public myRouterSer: Router) {}

ngOnInit(){
  this.myUserServ.check()
  .catch((err)=>{
    alert("We are having blah blah blah");
    console.log(err);
  })
}
logoutClick(){
  this.myUserServ.logout()
  .then(()=>{
    this.myRouterSer.navigateByUrl("/nappy-routine")
  })
}
}