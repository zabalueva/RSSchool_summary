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
  words: { word: string, translation: string, trainClicks: string | null, correctAnswers: string | null, incorrectAnswers: string | null, percentCorrect: number}[] = [];

  constructor(public statisticsService: StatisticsService) {
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
      statisticsData.innerHTML = '';
    }
  }

  getTrainClick(word:string) {
    return localStorage.getItem(word);
  }

  getCorrectClick(word:string) {
    return localStorage.getItem(`${word}s`);
  }

  getInCorrectClick(word:string){
    return localStorage.getItem(word + '-');
  }

  getWords(numberCategory: number){
    this.words = [];
    cards[numberCategory].forEach((el) => this.words.push(
      {word: el.word, translation: el.translation, trainClicks: this.getTrainClick(el.word), correctAnswers: this.getCorrectClick(el.word), incorrectAnswers: this.getInCorrectClick(el.word), percentCorrect: 8}));
    return this.words;
  }
}
