import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './authGuard/adminguard/admin.guard';
import { UserGuard } from './authGuard/userguard/user.guard';
import { AddcategoriesComponent } from './pages/admin/addcategories/addcategories.component';
import { AddquizzesComponent } from './pages/admin/addquizzes/addquizzes.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';

const routes: Routes = [
  {path:'',component:SigninComponent,pathMatch:'full'},
  {path:'signin',component:SigninComponent,pathMatch:'full'},
  {path:"signup",component:SignupComponent,pathMatch:'full'},
  {path:"admin",component:AdmindashboardComponent,canActivate:[AdminGuard],
children:[
  {path:"",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"category",component:CategoryComponent},
  {path:'addcategories',component:AddcategoriesComponent},
  {path:'quizzes',component:QuizzesComponent},
  {path:'addquizzes',component:AddquizzesComponent}
]},
  {path:"user",component:UserdashboardComponent,pathMatch:'full',canActivate:[UserGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
