import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserServiceService, Routine } from '../api/user-service.service';

@Component({
  selector: 'app-routine-details',
  templateUrl: './routine-details.component.html',
  styleUrls: ['./routine-details.component.css']
})
export class RoutineDetailsComponent implements OnInit {
  id: string;
  routineItem: Routine


  constructor(
    private myRouterServ: Router,
    private myUserServ: UserServiceService,
    private myActivatedRouterServ: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.myActivatedRouterServ.paramMap
      .subscribe((myParams) => {
        this.id = myParams.get("routineId");
        this.fetchRoutineDetails();
      });
  }
  
  fetchRoutineDetails() {
    this.myUserServ.routineDetails(this.id)
    .then((response: Routine) => {
      this.routineItem = response;
    })
    .catch((err) => {
      alert("Sorry! There was a problem getting the routine's details. 😅");
      console.log(err);
    });
  }
}
