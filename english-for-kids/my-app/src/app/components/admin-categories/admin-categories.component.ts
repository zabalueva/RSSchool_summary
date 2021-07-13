import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cards, { categories } from 'dist/my-app/assets/cards';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {
public categories = categories;
public cards = cards;
public editMode = false;
  constructor() { }

  ngOnInit(): void {
  }

  deleteCategory(){
    console.log('delete')
  }

  createCategory(){
    console.log('create')
  }

  enableEditMode(){
    this.editMode = true;
    console.log('create')
  }

  cancelEditMode(){
    this.editMode = false;
    console.log('closeEdit');
  }

  updateCategory(){
    this.editMode = true;
    console.log('update')
  }

}
