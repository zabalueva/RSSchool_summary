import { BaseComponent } from '../base/base';
import { Card } from '../card/card';
import './playingField.scss';

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

export const playingField: HTMLDivElement = document.createElement('div');
document.body.appendChild(playingField);
playingField.innerHTML = '<div class="playingField"><div class="playingField__wrap wrapper">  <div class="playingField__card">    <div class="playingField__card_front">Front</div>    <div class="playingField__card_back">Back</div>  </div></div></div>';
