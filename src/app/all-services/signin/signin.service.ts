import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import basUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }

  public getcurrentUser(){
    return this.http.get(`${basUrl}/current-user`);
  }

  public generateToken(signinData:any){
    return this.http.post(`${basUrl}/generate-token`,signinData);
  }

  public signinUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  public issignIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == "" || tokenStr == null ){
      return false;
    }
    else{
      return true;
    }
  }
}
