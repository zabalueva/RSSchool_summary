import { BaseComponent } from '../base/base';
import { Card } from '../card/card';
import 'PlayingField.scss';

export class PlayingField extends BaseComponent {
  private cards: Card[] = [];

  private complexity = 16;

  constructor() {
    super('div');
  }

  clear() {
    this.cards = [];
  }

  complete(complexity: number) {
    this.cards.length = complexity;
  }
}
