import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardViewWrapComponent } from './card-view-wrap/card-view-wrap.component';
import { PlayViewComponent } from './play-view/play-view.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardsViewComponent,
    HeaderComponent,
    SidenavComponent,
    CardViewWrapComponent,
    PlayViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CategoriesComponent,
    CardsViewComponent,
    HeaderComponent,
    SidenavComponent,
    PlayViewComponent
  ]
})
export class ComponentsModule { }
