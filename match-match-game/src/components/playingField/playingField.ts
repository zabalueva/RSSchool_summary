import { BaseComponent } from '../base/base';
import { Card } from '../card/card';
import './playingField.scss';
import { Timer } from '../../shared/timer';

const SHOW_TIME = 3;

export class PlayingField extends BaseComponent {
  private cards: Card[] = [];

  private timer: Timer;

  private timerDisplay: HTMLDivElement;

  constructor() {
    super('div', ['playingField']);
    this.timer = new Timer();
    this.timerDisplay = document.createElement('div');
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  complete(complexity: number) {
    this.cards.length = complexity;
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.element.append(this.timer.startTimer());
    this.cards.forEach((item) => this.element.appendChild(item.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.getBack());
    }, SHOW_TIME * 1000);
  }
}
