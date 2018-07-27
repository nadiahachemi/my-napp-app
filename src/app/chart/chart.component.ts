import { Component, OnInit } from '@angular/core';
import { Router } from "../../../node_modules/@angular/router";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor( public myRouterServ: Router) { }

  ngOnInit() {
  }

}
