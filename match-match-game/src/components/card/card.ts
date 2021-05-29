import { BaseComponent } from '../base/base';
import './card.scss';

const TURN_CLASS = 'turned';
export class Card extends BaseComponent {
  isTurned = false;

  constructor(readonly image: string) {
    super('div', ['playingField__card-wrap']);
    this.element.innerHTML = `<div class="playingField__card">
      <div class="playingField__card_front" style="background-image: url('./images/${image}')"></div>
      <div class="playingField__card_back"></div>
      </div>`;
  }

  getFront(): Promise<void> {
    this.isTurned = false;
    return this.getSight();
  }

  getBack(): Promise<void> {
    this.isTurned = true;
    return this.getSight(true);
  }

  private getSight(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(TURN_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
