import { animateChild } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';
import { selectCategoryFree } from 'src/app/store/selectors/category.selectors';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})

export class CardsViewComponent implements OnInit {
title:string = "animal";
image: string = "../../assets/img/fly.jpg";
listNav = categories;
fillerNav = Array.from({length: 8}, (_, i) => `${this.listNav[i]}`);
mode = true;
public fillerCategory:Card[] | null | undefined = [];
number:number = 0;


  constructor() {

  }

  /* findCategory(){
    if (this.fillerCategory){
    this.category = Array.from({length: 8}, (_, i) => `${this.fillerCategory[i]}`)
    }
  } */

  fillCategory(): Card[] {
    return this.fillerCategory as unknown as Card[] || [];
  }

  ngOnInit() {
    this.number = this.fillerNav?.indexOf(this.title);
    this.fillerCategory = cards[this.number];
    /* this.findCategory(); */
    this.fillCategory();
    console.log(this.fillCategory())
  }

soundOn(){
  let audio = new Audio();
  audio.src = "../../../assets/audio/cat.mp3";
  audio.load();
  audio.play();
  this.mode = !this.mode;
}

}
