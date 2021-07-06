import cards from "src/assets/cards";
import { Card } from "../models/card";

export class StatisticsService {
  trainClicks: number=0;


  getTrainClick() {
    return this.trainClicks;
  }

  incrementTrainClicks() {
    this.trainClicks = this.trainClicks+1;
    return this.trainClicks;
  }

}