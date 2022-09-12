import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

usersignIn(){
  console.log(this.signIn.value)
}

  constructor() { }

  ngOnInit(): void {
  }

}
