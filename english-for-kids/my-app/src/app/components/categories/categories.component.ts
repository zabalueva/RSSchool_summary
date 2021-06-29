import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import cards from 'src/assets/cards';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
    listNav = cards[0];
    fillerNav = Array.from({length: 8}, (_, i) => `${this.listNav[i]}`);
    link = '/card';
  constructor() { }

  saveNumberCategory(){

  }

}
