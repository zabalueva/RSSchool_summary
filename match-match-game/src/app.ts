import { Game } from './components/game/game';
import { ImageCategory } from './models/imageCategory';

export class App {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const response = await fetch('../public/image.json');
    const categories: ImageCategory[] = await response.json();
    const animal = categories[0];

    const images = animal.images.map((item) => `${animal.category}/${item}`);
    this.game.startGame(images);
  }
}
