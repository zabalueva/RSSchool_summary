import { animateChild } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card';
import { selectCategoryFree } from 'src/app/store/selectors/category.selectors';
import cards from 'src/assets/cards';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.scss']
})

export class CardsViewComponent implements OnInit {
title:string = "animal";
image: string = "";
listNav = cards[0];
fillerNav = Array.from({length: 8}, (_, i) => `${this.listNav[i]}`);
mode = true;

number:number = 0;
fillerCategory = cards[this.number];
category: string[] | null | undefined = [];

  constructor() {

  }

  findCategory(){
    this.category = Array.from({length: 8}, (_, i) => `${this.fillerCategory[i]}`)
  }

  ngOnInit() {
    this.number = this.fillerNav?.indexOf(this.title);
  }

soundOn(){
  if (this.mode){
  console.log('audio');
  let audio = new Audio();
  audio.src = "../../../assets/audio/cat.mp3";
  audio.load();
  audio.play();
  }
  this.mode = !this.mode;
}

}
