import { Component } from "@angular/core";
import { UserServiceService } from "./api/user-service.service";

@Component({
 selector: "app-root",
 templateUrl: "./app.component.html",
 styleUrls: ["./app.component.css"]
})
export class AppComponent {
 title = "app";

 constructor(public myUserServ: UserServiceService) {}

ngOnInit(){
  this.myUserServ.check()
  .catch((err)=>{
    alert("We are having blah blah blah");
    console.log(err);
  })
}
logoutClick(){
  this.myUserServ.logout()
  .catch((err)=>{
    alert("Sorry there was a problem with your log out");
    console.log(err);
  })
}
}