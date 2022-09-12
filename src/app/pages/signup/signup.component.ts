import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  usersignUp(){
    console.log(this.signUp.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
