import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import basUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  userSignUp(data:any){
    return this.http.post(`${basUrl}/user/`,data);
  }
}
