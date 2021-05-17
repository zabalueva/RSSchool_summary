import { BaseComponent } from '../base/base';
import { Card } from '../card/card';
import './playingField.scss';

const SHOW_TIME = 3;

export class PlayingField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['playingField']);
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
    this.cards.forEach((item) => this.element.appendChild(item.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.getBack());
    }, SHOW_TIME * 1000);
  }
}
