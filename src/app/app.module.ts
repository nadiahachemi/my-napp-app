import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule} from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { CurlsInfosComponent } from './curls-infos/curls-infos.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { NappyRoutineComponent } from './nappy-routine/nappy-routine.component';
import { SignupComponent } from './signup/signup.component';
import { RoutineComponent } from './routine/routine.component';
import { ChartComponent } from './chart/chart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RoutineDetailsComponent } from './routine-details/routine-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomepageComponent,
    NotFoundPageComponent,
    LoginComponent,
    CurlsInfosComponent,
    WishListComponent,
    NappyRoutineComponent,
    RoutineComponent,
    ChartComponent,
    ProductDetailsComponent,
    RoutineDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
