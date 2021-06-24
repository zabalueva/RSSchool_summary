import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CategoriesComponent } from './categories/categories.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CardsViewComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  exports: [
    CategoriesComponent,
    CardsViewComponent,
    HeaderComponent,
    SidenavComponent
  ]
})
export class ComponentsModule { }
