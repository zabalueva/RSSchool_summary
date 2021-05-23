import { PlayingField } from '../components/playingField/playingField';
import { BaseComponent } from '../components/base/base';
import { Card } from '../components/card/card';
import { delay } from '../shared/delay';
import { ImageCategory } from '../models/imageCategory';

const turnDelay = 0;
export class Game extends BaseComponent {
  private readonly playingField: PlayingField;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('div');
    this.playingField = new PlayingField();
    this.element.appendChild(this.playingField.element);
  }

  async startSettings() {
    const response = await fetch('./images.json');
    const categories: ImageCategory[] = await response.json();
    const animal = categories[0];
    const images = animal.images.map((item) => `${animal.category}/${item}`);
    this.startGame(images);
  }

  startGame(images: string[]/* , complexity: number */) {
    this.playingField.clear();
    /* this.playingField.complete(complexity); */
    const cards = images.concat(images).map((url) => new Card(url)).sort(() => Math.random() - 0.5);
    cards.forEach((card) => card.element.addEventListener('click', () => this.cardTurn(card)));
    this.playingField.addCards(cards);
  }

  private async cardTurn(card: Card) {
    if (this.isAnimation) {
      return;
    }
    if (!card.isTurned) {
      return;
    }
    this.isAnimation = true;
    await card.getFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image === card.image) {
      console.log('green');
    }

    if (this.activeCard.image !== card.image) {
      await delay(turnDelay);
      console.log('must back');
      await Promise.all([this.activeCard.getBack(), card.getBack()]);
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
