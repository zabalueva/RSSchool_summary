import { Component, OnInit } from '@angular/core';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-admin-words',
  templateUrl: './admin-words.component.html',
  styleUrls: ['./admin-words.component.scss']
})
export class AdminWordsComponent implements OnInit {
  public categories = categories;
  public cards = cards;
  public editMode = false;
  constructor() { }

  ngOnInit(): void {
  }

  deleteWord(){
    console.log('delete')
  }

  createWord(){
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

  updateWord(){
    this.editMode = true;
    console.log('update')
  }

}
