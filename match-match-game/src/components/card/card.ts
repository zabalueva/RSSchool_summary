import { BaseComponent } from '../base/base';
import 'card.scss';

export class Card extends BaseComponent {
  constructor(image: string) {
    super('div');
    const imagePath = image;
  }

  getFront() {
    this.element.classList.add('card_front');
  }

  getBack() {
    this.element.classList.remove('card_front');
  }
}
