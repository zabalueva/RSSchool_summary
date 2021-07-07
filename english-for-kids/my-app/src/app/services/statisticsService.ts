import cards from "src/assets/cards";
import { Card } from "../models/card";
import { WordStatistics } from "../models/wordStatistics";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  word: WordStatistics={
    trainClicks: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    totalClicks: 0,
  }
  trainClicks: number=0;


  getTrainClick(word: string) {
    localStorage.setItem(word, this.trainClicks.toString())
  }

  getStatistics(wordMeans: WordStatistics) {
    this.word=wordMeans;
  }

  incrementTrainClicks(word: string) {
    if (localStorage.getItem(word)!==null) {
      let trainClicks=Number(localStorage.getItem(word));
      trainClicks=trainClicks+1;
      localStorage.setItem(word, trainClicks.toString());
    } else {
      localStorage.setItem(word, '1');
    }
  }

  incrementCorrectClicks(word: string) {
    let key=`${word}s`
    if (localStorage.getItem(key)!==null) {
      let correctClicks=Number(localStorage.getItem(key));
      correctClicks=correctClicks+1;
      localStorage.setItem(key, correctClicks.toString());
    } else {
      localStorage.setItem(key, '1');
    }
  }

  incrementInCorrectClicks(word: string) {
    let key=`${word}f`
    if (localStorage.getItem(key)!==null) {
      let incorrectClicks=Number(localStorage.getItem(key));
      incorrectClicks=incorrectClicks+1;
      localStorage.setItem(key, incorrectClicks.toString());
    } else {
      localStorage.setItem(key, '1');
    }
  }

}