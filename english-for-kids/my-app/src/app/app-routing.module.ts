import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminWordsComponent } from './components/admin-words/admin-words.component';
import { AdminComponent } from './components/admin/admin.component';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const adminRoutes: Routes = [
  { path: 'categories', component: AdminCategoriesComponent },
  { path: 'words', component: AdminWordsComponent },
];
const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'card', component: CardsViewComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'admin', component: AdminComponent, children: adminRoutes},
  { path: 'login', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
