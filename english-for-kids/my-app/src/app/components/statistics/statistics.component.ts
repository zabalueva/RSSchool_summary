import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from 'src/app/services/statisticsService';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent {
  categoriesList = categories;
  cardsList = cards;
  category = categories[0];
  words: { word: string, translation: string, trainClicks: string | null, correctAnswers: string | null, incorrectAnswers: string | null, percentCorrect: string}[] = [];

  constructor(public statisticsService: StatisticsService, private router: Router) {
  }

  repeatDifficult(){
    return this.words;
  }

  resetStatistics(){
    localStorage.clear();
  }

  getTrainClick(word:string) {
    return localStorage.getItem(word);
  }

  getCorrectClick(word:string) {
    return localStorage.getItem(`${word}s`);
  }

  getInCorrectClick(word:string){
    return localStorage.getItem(`${word}f`);
  }

  getPercentCorrect(word:string){
    if(!localStorage.getItem(`${word}s`) || !localStorage.getItem(`${word}f`)){
      return '0';
    }
    let totalClicks = Number(localStorage.getItem(`${word}s`)) + Number(localStorage.getItem(`${word}f`));
    return (Number(localStorage.getItem(`${word}s`))/totalClicks*100).toFixed(2);
  }

  getWords(numberCategory: number){
    this.words = [];
    cards[numberCategory].forEach((el) => this.words.push(
      {word: el.word, translation: el.translation, trainClicks: this.getTrainClick(el.word), correctAnswers: this.getCorrectClick(el.word), incorrectAnswers: this.getInCorrectClick(el.word), percentCorrect: this.getPercentCorrect(el.word)}));
    return this.words;
  }
}
