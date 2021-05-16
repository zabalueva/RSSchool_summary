import { PlayingField } from '../playingField/playingField';
import { BaseComponent } from '../base/base';
import { Card } from '../card/card';
import { delay } from '../../shared/delay';

const turnDelay = 10;
export class Game extends BaseComponent {
  private readonly playingField: PlayingField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('div');
    this.playingField = new PlayingField();
    this.element.appendChild(this.playingField.element);
  }

  startGame(images: string[]/* , complexity: number */) {
    this.playingField.clear();
    /* this.playingField.complete(complexity); */
    console.log('dkfj');
    const cards = images.concat(images).map((url) => new Card(url)).sort(() => Math.random() - 0.5);
    cards.forEach((card) => card.element.addEventListener('click', () => this.cardTurn(card)));
    this.playingField.addCards(cards);
  }

  private async cardTurn(card: Card) {
    console.log('turn');
    if (this.isAnimation) {
      return;
    }
    this.isAnimation = true;
    await card.getFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(turnDelay);
      await Promise.all([this.activeCard.getBack(), card.getBack()]);
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
