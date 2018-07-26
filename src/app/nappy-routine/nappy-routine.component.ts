import { Component, OnInit } from '@angular/core';
import { UserServiceService, Routine, whenForm } from '../api/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nappy-routine',
  templateUrl: './nappy-routine.component.html',
  styleUrls: ['./nappy-routine.component.css']
})
export class NappyRoutineComponent implements OnInit {
  routines: Routine[];
  whenForm: string[]= [];

  constructor(public myUserServ: UserServiceService, public myRouterServ: Router) { }

  ngOnInit() {
    this.myUserServ.check()
    .catch((err)=>{
      alert("We are having blah blah blah");
      console.log(err);
    })
    this.getRoutines();

    this.getUserRoutines();

  }



  getRoutines(){
    this.myUserServ.getRoutines()
    .then(result=>{
      this.routines= result;
    })
    .catch((err)=>{
      alert ("couldn't get routines");
      console.log(err);
    })
  }

  addRoutineToRoutineList(oneRoutine){
    this.myUserServ.addRoutineToRoutineList(oneRoutine)
    .catch((err)=>{
      alert ("couldn't add this routine to your routine's list sorry");
      console.log(err);
    })
  };

  getUserRoutines(){
    this.myUserServ.getUserRoutines()
    .then(() => {
      this.whenForm =
        this.myUserServ.currentUser.routines.map((routine) => {
          return routine.when;
        });
    })
    .catch((err)=>{
      alert ("couldn't get your routines");
      console.log(err);
    })
  };

  deleteRoutine(oneRoutine){
    this.myUserServ.deleteRoutine(oneRoutine.info)
    .catch((err)=>{
      alert("couldn't pull this from your routines");
      console.log(err);
    })
    this.myUserServ.getUserRoutines()
    .catch((err)=>{
      alert ("couldn't get your routines");
      console.log(err);
    })
  }

  routineWhen(oneRoutine, selection){
    const choice = new whenForm();
    choice.when = selection;
    this.myUserServ.routineWhen(oneRoutine.info, choice)
    .catch((err)=>{
      alert("We couldn't do it sorry bby");
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

  }
