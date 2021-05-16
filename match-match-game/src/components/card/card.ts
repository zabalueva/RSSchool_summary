import { BaseComponent } from '../base/base';
import './card.scss';

export class Card extends BaseComponent {
  constructor(readonly image: string) {
    super('div', ['playingField__card']);
    this.element.innerHTML = `<div class="playingField__card">      <div class="playingField__card_front" style="background-image: url('./images/${image}')">Front</div>
      <div class="playingField__card_back">Back</div>  </div>`;
  }

  getFront() {
    return this.sight(false);
    /* this.element.classList.add('card_front'); */
  }

  getBack() {
    return this.sight(true);
    /* this.element.classList.remove('card_front'); */
  }

  private sight(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle('card_front', isFront);
      this.element.addEventListener('transitioned', () => resolve(), {
        once: true,
      });
    });
  }
}

/* export const card: Card = document.createElement('div');
document.body.appendChild(card); */
