import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/all-services/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriesComponent implements OnInit {


  addCategory =new FormGroup({
    'title' : new FormControl('',[Validators.required]),
    'description' : new FormControl('',[Validators.required])
  })

  constructor(private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
  }

  addCategories(){
    console.log(this.addCategory.value);
    this.categoryService.addCategories(this.addCategory.value).subscribe(
      (response)=>{
       Swal.fire({
        position:'center',
        icon:'success',
        title:'Category Added Successfully',
        showConfirmButton:false,
        timer:1500
      })
      this.router.navigate(['admin/category']);
      },
      (error)=>{
        Swal.fire({
          position:'center',
          icon:'error',
          title:'Category not Added',
          showConfirmButton:false,
          timer:1500
        })
         console.log(error);
      })
  }

}
