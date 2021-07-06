import cards from "src/assets/cards";
import { Card } from "../models/card";
import { WordStatistics } from "../models/wordStatistics";

export class StatisticsService {
  word: WordStatistics = {
    trainClicks: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    totalClicks: 0,}
    trainClicks: number=0;


  getTrainClick(word:string) {
    return {word: this.trainClicks};
  }

  getStatistics(wordMeans:WordStatistics){
    this.word = wordMeans;
  }

  incrementTrainClicks(word:string) {
    this.trainClicks = this.trainClicks+1;
    return {word: this.trainClicks};
  }

}