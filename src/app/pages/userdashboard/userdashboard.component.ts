import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin/signin.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
   issignIn:boolean=false;
  user:any=null;

  constructor(private signService:SigninService,private router:Router) { }

  ngOnInit(): void {
     this.issignIn = this.signService.issignIn();
    this.user = this.signService.getUser();
    this.signService.signInStatusSubject.asObservable().subscribe((res)=>{
      console.log("log in user value",res);
      this.issignIn = this.signService.issignIn();
      this.user = this.signService.getUser();
  })}
  public signOut(){
    this.signService.signOut();
    this.signService.signInStatusSubject.next(false);
    this.router.navigate(['']);
  }

}
