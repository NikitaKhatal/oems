import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav'
import {HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterCeptorInterceptor, AuthInterCeptorInterceptorProvider } from './all-services/authInterCeptor/auth-inter-ceptor.interceptor';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AddcategoriesComponent } from './pages/admin/addcategories/addcategories.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { AddquizzesComponent } from './pages/admin/addquizzes/addquizzes.component';
import { LogoutComponent } from './pages/admin/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    HomeComponent,
    ProfileComponent,
    CategoryComponent,
    AddcategoriesComponent,
    QuizzesComponent,
    AddquizzesComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [AuthInterCeptorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
