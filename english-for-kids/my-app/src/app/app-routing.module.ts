import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PlayViewComponent } from './components/play-view/play-view.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'card', component: CardsViewComponent },
  { path: 'play', component: PlayViewComponent },
  { path: 'statistics', component: CategoriesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
