import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardViewWrapComponent } from './card-view-wrap/card-view-wrap.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardsViewComponent,
    HeaderComponent,
    SidenavComponent,
    CardViewWrapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CategoriesComponent,
    CardsViewComponent,
    HeaderComponent,
    SidenavComponent
  ]
})
export class ComponentsModule { }
