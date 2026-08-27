import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/modules/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private categoryService = inject(CategoryService)

    ngOnInit(): void {
    this.getCategories();
  }

  displayedColumns: string[] = ['id','name','description','actions'];
  dataSource = new MatTableDataSource<CategoryElement>();

  getCategories(): void{
    this.categoryService.getCategories()
    .subscribe((data:any)=> {
      console.log("Respuesta Categoria", data)
      this.processCategoriesResponse(data);
    }, (error:any)=> {
      console.log("error", error);
      
    })
  }
   processCategoriesResponse(resp: any): void {
    // La API devuelve la propiedad como "categoryResponse" (c minúscula).
    const categoryResponse = resp?.categoryResponse?.category
      ?? resp?.CategoryResponse?.category
      ?? [];
    const categories: CategoryElement[] = Array.isArray(categoryResponse)
      ? categoryResponse
      : [categoryResponse];

    this.dataSource.data = categories;
    console.log('Categorías cargadas en la tabla:', this.dataSource.data);
  }

}

export interface CategoryElement{
  description: string;
  id: number;
  name: string;
}
