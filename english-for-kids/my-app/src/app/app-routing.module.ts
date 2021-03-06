import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'card', component: CardsViewComponent },
  { path: 'statistics', component: StatisticsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
