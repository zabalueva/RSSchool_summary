import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card';
import { StatisticsService } from 'src/app/services/statisticsService';
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
  words: { word: string, translation: string, trainClicks: number, correctAnswers: number, incorrectAnswers: number, percentCorrect: number}[] = [];

  constructor() {
  }

  ngOnInit() {
console.log('dkfj')
  }

  repeatDifficult(){
    return false;
  }

  resetStatistics(){
    let statisticsData = document.getElementById("statisticsData");

    if (statisticsData) {
      console.log(statisticsData)
      statisticsData.innerHTML = '';
    }
  }

  getWords(numberCategory: number){
    this.words = [];
    cards[numberCategory].forEach((el) => this.words.push(
      {word: el.word, translation: el.translation, trainClicks: 4, correctAnswers: 5, incorrectAnswers: 8, percentCorrect: 8}));
    return this.words;
  }


}
