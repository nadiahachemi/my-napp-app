import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { CurlsInfosComponent } from './curls-infos/curls-infos.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { NappyRoutineComponent } from './nappy-routine/nappy-routine.component';
import { SignupComponent } from './signup/signup.component';
import { ChartComponent } from './chart/chart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RoutineDetailsComponent } from './routine-details/routine-details.component';



const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path: "signup", component: SignupComponent},
  {path:"login", component: LoginComponent},
  {path:"curls-infos", component: CurlsInfosComponent},
  {path:"wish-list", component: WishListComponent},
  {path: "nappy-routine", component: NappyRoutineComponent},
  {path: "chart", component: ChartComponent},
  {path: "product/:productId", component: ProductDetailsComponent},
  {path: "routine/:routineId", component: RoutineDetailsComponent},
  { path: "**", component: NotFoundPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
