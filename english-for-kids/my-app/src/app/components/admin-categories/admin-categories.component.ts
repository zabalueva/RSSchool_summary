import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cards, { categories } from 'dist/my-app/assets/cards';
import { ConfigService } from 'src/app/controllers/categoryControllers';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent {
public categories:any ;
public cards = cards;
public editMode = false;
public cat: any;

  constructor(public serviceRequest: ConfigService) {
    this.categories = categories;

  }

  createCategory(){
    const newCardContainer = document.createElement('div');
    newCardContainer.classList.add('card-container');
    document.querySelector('.cards-container')?.appendChild(newCardContainer);
    const newCard = document.createElement('div');
    newCard.classList.add('category__card');
    newCardContainer.appendChild(newCard);
    console.log('create')
  }

  sendCategory() {
    const newCardContainer = document.createElement('div');
    newCardContainer.classList.add('card-container');
    document.querySelector('.cards-container')?.appendChild(newCardContainer);
    const newCard = document.createElement('div');
    newCard.classList.add('category__card');
    newCardContainer.appendChild(newCard);
    console.log('send')
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

  deleteCategory(){
    this.cat =  this.serviceRequest.getAllCategories();

    console.log(this.cat);
    console.log('del')
  }

}
