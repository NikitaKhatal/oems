import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import basUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }

  public signInStatusSubject = new Subject<boolean>();

  public getcurrentUser(){
    return this.http.get(`${basUrl}/current-user`);
  }

  public generateToken(signInData:any){
    return this.http.post(`${basUrl}/generate-token`,signInData);
  }

  public signInUser(token:any){
    localStorage.setItem('token',token.token);
    return true;
  }

  public issignIn(): boolean{
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == "" || tokenStr == null ){
      return false;
    }
    else{
      return true;
    }
  }

  public signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    console.log("Get Token",localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr !=null){
      return JSON.parse(userStr);
    }
    else{
      this.signOut();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    console.log('User Role',user);
    return user.authorities[0].authority;
  }
}
