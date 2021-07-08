import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardsViewComponent,
    SidenavComponent,
    StatisticsComponent,
    AdminComponent,
    LoginComponent
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
