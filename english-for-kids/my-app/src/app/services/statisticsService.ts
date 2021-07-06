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


  getTrainClick() {
    return this.trainClicks;
  }

  incrementTrainClicks() {
    this.trainClicks = this.trainClicks+1;
    return this.trainClicks;
  }

}