import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class ComponentsModule { }
