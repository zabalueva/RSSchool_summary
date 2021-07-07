import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardsViewComponent,
    SidenavComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CategoriesComponent,
    CardsViewComponent,
    SidenavComponent,
    StatisticsComponent
  ]
})
export class ComponentsModule { }
