import { Component, OnInit } from '@angular/core';
import {UserServiceService, HairSubmission} from "../api/user-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-curls-infos',
  templateUrl: './curls-infos.component.html',
  styleUrls: ['./curls-infos.component.css']
})
export class CurlsInfosComponent implements OnInit {
  hairForm: HairSubmission= new HairSubmission();

  constructor(public myUserServ: UserServiceService, public myRouterServ: Router) {}

  ngOnInit(){
    this.myUserServ.check()
    .then(() => {
      this.hairForm = new HairSubmission(this.myUserServ.currentUser);
    })
    .catch((err)=>{
      alert("We are having blah blah blah");
      console.log(err);
    })
  }
  logoutClick(){
    this.myUserServ.logout()
    .then(()=>{
      this.myRouterServ.navigateByUrl("/");
    })
    //res.render("/")
    .catch((err)=>{
      alert("Sorry there was a problem with your log out");
      console.log(err);
    })
  }
  hairInfoSubmit(){
    this.myUserServ.postHairUpdate(this.hairForm)
    .then((response) =>{
    this.myRouterServ.navigateByUrl("/curls-infos");
    this.myUserServ.check()
  .catch((err)=>{
    alert("We are having blah blah blah");
    console.log(err);
  })
  })
  .catch(err =>{
    alert("Sorry! There was a problem with your hair update.");
    console.log(err);
  });
  }

}

  