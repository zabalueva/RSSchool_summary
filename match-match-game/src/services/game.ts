import { PlayingField } from '../components/playingField/playingField';
import { BaseComponent } from '../components/base/base';
import { Card } from '../components/card/card';
import { delay } from '../shared/delay';
import { ImageBase } from '../models/imageBase';
import { Settings } from '../pages/settings';

const turnDelay = 0;
export class Game extends BaseComponent {
  private readonly playingField: PlayingField;

  private activeCard?: Card;

  private isAnimation = false;

  public isGame = false;

  public score = 0;

  public numberComparisons = 0;

  public numberIncorrectComparisons = 0;

  public customSettings: Settings;

  constructor() {
    super('div');
    this.playingField = new PlayingField();
    this.customSettings = new Settings();
    this.element.appendChild(this.playingField.element);
  }

  async startSettings(): Promise<void> {
    this.isGame = true;
    const response = await fetch('./images.json');
    const baseImages: ImageBase[] = await response.json();
    const category = baseImages.filter((el) => el.category === this.customSettings.getCategory());
    const needImage = category[0];
    const images = needImage.images.map((item: string) => `${needImage.category}/${item}`);
    this.startGame(images.slice(0, this.customSettings.getDifficulty() / 2));
  }

  startGame(images: string[]):void {
    this.playingField.clear();
    (document.querySelector('.settings') as Element).innerHTML='';
    const cards = images.concat(images).map((url) => new Card(url)).sort(() => Math.random() - 0.5);
    cards.forEach((card) => card.element.addEventListener('click', () => this.cardTurn(card)));
    this.playingField.addCards(cards);
  }

  stopGame() {
    this.isGame = false;
    this.calculateScore();
    this.playingField.stop();
    this.playingField.congrats();
  }

  calculateScore() {
    this.score = (this.numberComparisons - this.numberIncorrectComparisons) * 100 - this.playingField.stop() * 10 * this.playingField.complete(this.customSettings.getDifficulty());
    return this.score > 0 ? this.score : 0;
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
    this.numberComparisons += 0.5;

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }
    const activeCardElement = this.activeCard.element.childNodes[0] as Element;
    const cardElement = card.element.childNodes[0] as Element;

    if (this.activeCard.image === card.image) {
      activeCardElement.classList.add('playingField__correctPairs');
      cardElement.classList.add('playingField__correctPairs');
    }

    if ((this.numberComparisons - this.numberIncorrectComparisons) === this.playingField.complete(this.customSettings.getDifficulty())) {
      this.stopGame();
    }

    if (this.activeCard.image !== card.image) {
      this.numberIncorrectComparisons += 1;

      activeCardElement.classList.add('playingField__incorrectPairs');
      cardElement.classList.add('playingField__incorrectPairs');

      await delay(turnDelay);
      await Promise.all([this.activeCard.getBack(), card.getBack()]);

      activeCardElement.classList.remove('playingField__incorrectPairs');
      cardElement.classList.remove('playingField__incorrectPairs');
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
