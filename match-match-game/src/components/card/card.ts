import { BaseComponent } from '../base/base';
import './card.scss';

const TURN_CLASS = 'turned';
export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['playingField__card-wrap']);
    this.element.innerHTML = `<div class="playingField__card">
      <div class="playingField__card_front" style="background-image: url('./images/${image}')"></div>
      <div class="playingField__card_back"></div>
      </div>`;
  }

  getFront() {
    this.isFlipped = false;
    console.log(this.image);
    return this.sight(false);
    /* this.element.classList.add('card_front'); */
  }

  getBack() {
    this.isFlipped = true;
    return this.sight(true);
    /* this.element.classList.remove('card_front'); */
  }

  private sight(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(TURN_CLASS, isFront);
      this.element.addEventListener('transitioned', () => resolve(), {
        once: true,
      });
    });
  }
}

/* export const card: Card = document.createElement('div');
document.body.appendChild(card); */
