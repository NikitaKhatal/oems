import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/all-services/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private category:CategoryService) { }

  categoryData:any=[];
  getcategory:any;

  ngOnInit(): void {
    this.category.getAllCategories().subscribe(
      (response)=>{
        this.categoryData=response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      })
  }

  deleteCategory(category_id:any){
    console.log(category_id);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.category.deleteCategoriesById(category_id).subscribe(
          (response)=>{
            console.log(response);
          },
          (error)=>{
            console.log(error)
          })
        Swal.fire('Delete successfully', '', 'success')
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
}


getCategoryById(category_id:any){
  console.log(category_id);
  this.category.getCategoriesById(category_id).subscribe(
    (response)=>{
      this.getcategory=response;
      console.log(response);
    },
    (error)=>{
      console.log(error)
    })
}

  updateCategory(category_id:any){
    console.log(category_id)
}

}
