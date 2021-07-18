import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminWordsComponent } from './admin-words/admin-words.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardsViewComponent,
    SidenavComponent,
    StatisticsComponent,
    AdminComponent,
    LoginComponent,
    AdminCategoriesComponent,
    AdminWordsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [
    CategoriesComponent,
    CardsViewComponent,
    SidenavComponent,
    StatisticsComponent
  ]
})
export class ComponentsModule { }
