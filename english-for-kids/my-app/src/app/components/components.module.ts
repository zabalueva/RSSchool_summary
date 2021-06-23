import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CategoriesComponent } from './categories/categories.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardsViewComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonToggleModule
  ],
  exports: [
    CategoriesComponent,
    CardsViewComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
