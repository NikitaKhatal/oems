import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/all-services/signin/signin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

hide=true;

signIn = new FormGroup({
  'username' : new FormControl('',[Validators.required]),
  "password" : new FormControl('',[Validators.required])
})


constructor(private signService:SigninService,private router:Router) { }

ngOnInit(): void {
}

usersignIn(){
  console.log(this.signIn.value);
  this.signService.generateToken(this.signIn.value).subscribe(
    (response)=>{
      console.log("get Token",response);
      this.signService.signInUser(response);
      this.signService.getcurrentUser().subscribe(
        (response)=>{
          console.log("current user data",response);
          this.signService.setUser(response);
          if(this.signService.getUserRole() == 'ADMIN'){
            Swal.fire({
              position:'center',
              icon:"success",
              title:"Admin logged in successfully",
              showConfirmButton:true,
              timer: 1500,
      });
              this.router.navigate(['admin']);
              this.signService.signInStatusSubject.next(true);
          }
          else if(this.signService.getUserRole() == 'NORMAL'){
            Swal.fire({
              position:'center',
              icon:"success",
              title:"User logged in successfully",
              showConfirmButton:true,
              timer: 1500,
      });
            this.router.navigate(['user']);
              this.signService.signInStatusSubject.next(true);

          }
          else{
            this.signService.signOut();
          }
        },
        (error)=>{
          console.log(error);
        })
    },
    (error)=>{
       Swal.fire({
            position:'center',
            icon:"error",
            title:"Invalid Details !! try Again",
            showConfirmButton:false,
            timer: 1500,
    });
    console.log(error);
}
)
}
}
