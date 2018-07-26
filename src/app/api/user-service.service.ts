import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from "../../environments/environment";
import { post } from '../../../node_modules/@types/selenium-webdriver/http';

const {backendUrl}= environment;

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  routines: Routine [];
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

 getProducts(searchTerm: SearchTerm){
   return this.myHttpServ
   .post(`${backendUrl}/api/wish-list/search`, searchTerm, {withCredentials: true})
   .toPromise()
   .then((response:Product[])=>{
    this.products = response;
    return response;

   })
 };

 getRoutines(){
   return this.myHttpServ
   .get(`${backendUrl}/api/routines`, {withCredentials: true})
   .toPromise()
   .then((response: Routine[])=>{
     this.routines = response;
     return response;
   })
 }

 getUserRoutines(){
   return this.myHttpServ
  .get(`${backendUrl}/api/user-routines`,  {withCredentials: true})
  .toPromise()
 .then((response: any)=>{
   this.currentUser = response;
   return response;
 });

 }

 addProductToWishList(oneProduct){
   return this.myHttpServ
   .post(`${backendUrl}/api/wish-list/add`, {oneProduct}, { withCredentials: true })
   .toPromise()
   .then((response: any)=>{
     this.currentUser = response;
     return response;
   })
 }

 deleteProduct(oneWish){
   return this.myHttpServ
   .post(`${backendUrl}/api/wish-list/pull`, {oneWish}, {withCredentials: true})
  .toPromise()
  .then((response: any)=>{
    this.currentUser = response;
    return response;
  })
  }

 addRoutineToRoutineList(oneRoutine){
  return this.myHttpServ
  .post(`${backendUrl}/api/routines/add`, {oneRoutine}, { withCredentials: true })
  .toPromise()
  .then((response: any)=>{
    this.currentUser = response;
    return response;
  })
 }

 deleteRoutine(oneRoutine){
  return this.myHttpServ
  .post(`${backendUrl}/api/routines/pull`, {oneRoutine}, {withCredentials: true})
 .toPromise()
 .then((response: any)=>{
   this.currentUser = response;
   return response;
 })
 }

routineWhen(oneRoutine: Routine, whenForm: whenForm){
  return this.myHttpServ
  .post(`${backendUrl}/api/nappy-routine/when`, {whenForm, oneRoutine}, {withCredentials: true})
  .toPromise()
  .then((response: any)=>{
    this.currentUser = response;
    return response;
  })
}

}
export class Routine{
  _id: string;
  name:string;
  description: string;
  pictureUrl: string;
  video: string;
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
  wishList: any[];
  routines: any[];
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

   constructor(initialInfo: any = {}) {
      this.hairType = initialInfo.hairType;
      this.hairLength = initialInfo.hairLength;
      this.hairVolume = initialInfo.hairVolume;
      this.hairMoisture = initialInfo.hairMoisture;
   }
 }

 export class SearchTerm{
   searchTerm: string;
 }

 export class whenForm{
   when: string;
 }