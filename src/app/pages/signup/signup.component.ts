import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/all-services/signup/signup.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide=true;

  signUp = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    firstname : new FormControl('',[Validators.required]),
    lastname : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    phone : new FormControl('',[Validators.required])
  });


  constructor(private signupService:SignupService,private router:Router) { }


  ngOnInit(): void {
  }


  usersignUp(){
    console.log(this.signUp.value);
    this.signupService.userSignUp(this.signUp.value).subscribe
    ((data:any)=>{
      Swal.fire('Successfully Done','Welcome to Career Infotech','success');
      console.log(data);
      this.router.navigate(['']);
    },
    (err:any)=>{
      Swal.fire('Something went wrongs','User Not Found','error');
      console.log(err);
    })
  }

}
