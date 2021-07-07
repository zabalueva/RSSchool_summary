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
    if (localStorage.getItem(word) !== null){
    let trainClicks = Number(localStorage.getItem(word));
      trainClicks = trainClicks + 1;
      console.log(trainClicks);
    localStorage.setItem(word, trainClicks.toString());
  }
}

}