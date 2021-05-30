import { PlayingField } from '../components/playingField/playingField';
import { BaseComponent } from '../components/base/base';
import { Card } from '../components/card/card';
import { delay } from '../shared/delay';
import { ImageBase } from '../models/imageBase';
import { Settings } from '../pages/settings';
import { About } from '../pages/about';

import { DataBase } from '../controllers/dbConnect/dbConnect';
import { BestScore } from '../pages/bestScore';

const TURN_DELAY = 3;
const BASE_DIFFICULTY = 16;
export class Game extends BaseComponent {
  private readonly playingField: PlayingField;

  private activeCard?: Card;

  private isAnimation = false;

  public isGame = false;

  public score = 0;

  public numberComparisons = 0;

  public numberIncorrectComparisons = 0;

  public customSettings: Settings;

  public about: About;

  public bestScore: BestScore;

  private dataBase?: DataBase;

  constructor() {
    super('div');
    this.playingField = new PlayingField();
    this.customSettings = new Settings();
    this.dataBase = new DataBase();
    this.about = new About();
    this.bestScore = new BestScore();
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
    const cards = images.concat(images).map((url) => new Card(url)).sort(() => Math.random() - 0.5);
    cards.forEach((card) => card.element.addEventListener('click', () => this.cardTurn(card)));
    this.playingField.addCards(cards);

    if (this.customSettings.getDifficulty() > BASE_DIFFICULTY) {
      document.querySelectorAll(
        '.playingField__card-wrap',
      )?.forEach((el) => el.classList.add('playingField__card-wrap_big'));
    }
    this.customSettings?.destroy();
    this.about?.destroy();
    this.bestScore?.destroy();
  }

  stopGame():void {
    this.isGame = false;
    this.calculateScore();
    this.playingField.stop();
  }

  calculateScore():number {
    this.score = ((
      this.numberComparisons - this.numberIncorrectComparisons
    ) * 100 - this.playingField.stop() * 10) * Math.sqrt(
      this.playingField.complete(this.customSettings.getDifficulty()),
    );
    this.dataBase?.getBestPlayers();
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
      if ((this.numberComparisons - this.numberIncorrectComparisons)
        === this.playingField.complete(this.customSettings.getDifficulty() / 2)) {
        this.playingField.congrats(this.calculateScore(), this.playingField.stop());
        this.stopGame();
      }
    }

    if (this.activeCard.image !== card.image) {
      this.numberIncorrectComparisons += 1;

      activeCardElement.classList.add('playingField__incorrectPairs');
      cardElement.classList.add('playingField__incorrectPairs');

      await delay(TURN_DELAY);
      await Promise.all([this.activeCard.getBack(), card.getBack()]);

      activeCardElement.classList.remove('playingField__incorrectPairs');
      cardElement.classList.remove('playingField__incorrectPairs');
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
