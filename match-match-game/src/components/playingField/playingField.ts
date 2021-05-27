import { BaseComponent } from '../base/base';
import { Card } from '../card/card';
import './playingField.scss';
import { Timer } from '../timer/timer';

const SHOW_TIME = 3;

export class PlayingField extends BaseComponent {
  private cards: Card[] = [];

  private timer: Timer;

  constructor() {
    super('div', ['playingField']);
    this.timer = new Timer();
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  complete(complexity = 8) {
    this.cards.length = complexity;
    return complexity;
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.element.parentNode?.append(this.timer.element);

    this.cards.forEach((item) => this.element.appendChild(item.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.getBack());
      this.timer.startTimer();
    }, SHOW_TIME * 1000);
  }

  congrats() {
    console.log('congrats');
  }

  stop() {
    return this.timer.stopTimer();
  }
}
