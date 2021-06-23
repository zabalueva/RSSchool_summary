import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsViewComponent } from './components/cards-view/cards-view.component';

const routes: Routes = [
  { path: 'card', component: CardsViewComponent },
  { path: 'animal', component: CardsViewComponent },
  { path: 'statistics', component: CardsViewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
