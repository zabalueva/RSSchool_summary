import { Component, OnInit } from '@angular/core';
import cards, { categories } from 'dist/my-app/assets/cards';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {
public categories = categories;
public cards = cards;
  constructor() { }

  ngOnInit(): void {
  }

  deleteCategory(){
    console.log('csr')
  }

}
