import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-admin-words',
  templateUrl: './admin-words.component.html',
  styleUrls: ['./admin-words.component.scss']
})
export class AdminWordsComponent implements OnInit {
  public categories = categories;
  public editMode = false;
  public numberOfCategory: number;
  public cards = cards[0];

  constructor(private router: Router) {
    this.numberOfCategory=this.router.getCurrentNavigation()?.extras.state?.categoryIndex??1;
    this.cards = cards[this.numberOfCategory];
  }

  ngOnInit(): void {
  }

  deleteWord(){
    console.log('delete')
  }

  getSound(src: string) {
    console.log('dkfj');
    let audio=new Audio();
    audio.src=src;
    audio.load();
    audio.play();
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
