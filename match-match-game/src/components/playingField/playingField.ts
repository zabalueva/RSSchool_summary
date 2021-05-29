import { BaseComponent } from '../base/base';
import { Card } from '../card/card';
import './playingField.scss';
import { Timer } from '../timer/timer';
import { Congratulations } from '../congratulations/congratulations';

const SHOW_TIME = 3;

export class PlayingField extends BaseComponent {
  private cards: Card[] = [];

  private congratulations: Congratulations;

  private timer: Timer;

  constructor() {
    super('div', ['playingField']);
    this.timer = new Timer();
    this.congratulations = new Congratulations();
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  complete(difficulty:number): number {
    this.cards.length = difficulty;
    return difficulty;
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.element.parentNode?.append(this.timer.element);
    this.cards.forEach((item) => this.element.appendChild(item.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.getBack());
      this.timer.startTimer();
    }, SHOW_TIME * 1000);
  }

  congrats(score: number, time: number): void {
    this.element.append(this.congratulations.element);
    this.congratulations.redirect(score, time);
  }

  stop(): number {
    return this.timer.stopTimer();
  }
}
