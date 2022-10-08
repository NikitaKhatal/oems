import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import basUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getAllCategories(){
    return this.http.get(`${basUrl}/category/`);
  }

  public addCategories(data:any){
    return this.http.post(`${basUrl}/category/`,data);
  }

  public updateCategoriesById(id:any){
    return this.http.put(`${basUrl}/category/`,id);
  }

  public getCategoriesById(id:any){
    return this.http.get(`${basUrl}/category/`+id);
  }

  public deleteCategoriesById(id:any){
    return this.http.delete(`${basUrl}/category/`+id);
  }
}
