import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//
//import { ActivatedRoute } from '@angular/router';

const backendUrl = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  currentUser: User;
  products: Product[];

  constructor(
  //  private myActivatedRouteServ: ActivatedRoute,
    private myHttpServ: HttpClient
  ) { }

 postSignup(signupInfo: SignupSubmission){
  return this.myHttpServ
  .post(`${backendUrl}/api/signup`, signupInfo, {withCredentials: true})
  .toPromise()
  .then((response: any)=>{
    this.currentUser = response.userDoc;
    return response;
  });
}

postLogin(loginInfo: LoginSubmission) {
  return this.myHttpServ
    .post(`${backendUrl}/api/login`, loginInfo, {withCredentials: true})
    .toPromise()
    .then((response: any) => {
      this.currentUser = response.userDoc;
      return response;
    });
}

logout(){
  return this.myHttpServ
  .delete(`${backendUrl}/api/logout`, {withCredentials: true})
  .toPromise()
  .then((response: any)=>{
    this.currentUser = response.userDoc;
    return response;
  });
 }

 check(){
  return this.myHttpServ
  .get(`${backendUrl}/api/checklogin`, {withCredentials: true})
  .toPromise()
  .then((response: any)=>{
    this.currentUser = response.userDoc;
    return response;
  });
 }

 postHairUpdate(hairInfo: HairSubmission){
   return this.myHttpServ
   .post(`${backendUrl}/api/curls-infos`, hairInfo, {withCredentials: true})
   .toPromise()
  .then((response: any)=>{
    this.currentUser = response.userDoc;
    return response;
  });
 }


getWishList(){
  return this.myHttpServ
   .get(`${backendUrl}/api/wish-list`,  {withCredentials: true})
   .toPromise()
  .then((response: any)=>{
    this.currentUser = response;
    return response;
  });
 }

 getProducts(){
   return this.myHttpServ
   .get(`${backendUrl}/api/wish-list/search`, {withCredentials: true})
   .toPromise()
   .then((response:Product[])=>{
     console.log("RESPONSE ---------", response);
    this.products = response;
    return response;

   })
 };
}

export class User {
  _id: string;
  name: string;
  email: string;
  encryptedPassword: string;
  hairType:string
  hairLength:number;
  hairVolume:string;
  hairMoisture:string;
  wishList: [string];
  createdAt: Date;
  updatedAt: Date;
}

export class Product{
  _id: string;
  name: string;
  brand: string;
  pictureUrl: string;
  description: string;
  goodFor: [string];
}
export class SignupSubmission{
  name: string;
  email:string;
  originalPassword: string;
  pictureUrl: string;
}

export class LoginSubmission {
  email: string;
  loginPassword: string;
 }

 export class HairSubmission{
   hairType: string;
   hairLength: number;
   hairVolume: string;
   hairMoisture: string;
 }

 export class SearchTerm{
   searchTerm: string;
 }