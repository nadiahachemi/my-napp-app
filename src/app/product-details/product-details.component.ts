import { Component, OnInit } from '@angular/core';
import { UserServiceService, Product } from '../api/user-service.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
 productItem: Product


  constructor(
    private myRouterServ: Router,
    private myUserServ : UserServiceService,
    private myActivatedRouteServ: ActivatedRoute,


  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
      .subscribe((myParams) => {
        this.id = myParams.get("productId");
        this.fetchProductDetails();
      });
  }

  fetchProductDetails() {
    this.myUserServ.productDetails(this.id)
    .then((response: Product) => {
      this.productItem = response;
    })
    .catch((err) => {
      alert("Sorry! There was a problem getting the product's details. 😅");
      console.log(err);
    });
  }
}