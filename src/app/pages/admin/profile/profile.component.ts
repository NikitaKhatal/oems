import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/all-services/signin/signin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData:any;

  constructor(private signService:SigninService) { }

  ngOnInit(): void {
    this.signService.getcurrentUser().subscribe((resonse)=>{
      this.userData =resonse;
      console.log(resonse);
    },)
  }

}
