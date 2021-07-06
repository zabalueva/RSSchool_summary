import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {
  categoriesList = categories;
  cardsList = cards;
  category = categories[0];
  words: { word: string; translation: string; }[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
console.log('dkfj')
  }

  repeatDifficult(){
    return false;
  }

  resetStatistics(){
    return false;
  }

  getWords(numberCategory: number){
    this.words = [];
    cards[numberCategory].forEach((el) => this.words.push({word: el.word, translation: el.translation}));
    return this.words;
  }

}
