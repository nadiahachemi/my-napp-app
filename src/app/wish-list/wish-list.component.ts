import { Component, OnInit } from '@angular/core';
import { UserServiceService, SearchTerm, Product } from '../api/user-service.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  searchTerm : SearchTerm= new SearchTerm();
  products: Product[];

  constructor(public myUserServ: UserServiceService, public myRouterServ: Router) { }

  ngOnInit() {
    this.myUserServ.check()
    .catch((err)=>{
      alert("We are having blah blah blah");
      console.log(err);
    })
    this.getWishList();
    this.getProducts();
  }
  getWishList(){
    this.myUserServ.getWishList()
    .catch((err)=>{
      alert ("couldn't get wishlist");
      console.log(err);
    })
  };

  getProducts(){
    this.myUserServ.getProducts()
    .then(result=>{
      this.products= result;
    })
    .catch((err)=>{
      alert ("couldn't get products");
      console.log(err);
    });
  };

  logoutClick(){
    this.myUserServ.logout()
    //res.render("/")
    .catch((err)=>{
      alert("Sorry there was a problem with your log out");
      console.log(err);
    })
  };

}