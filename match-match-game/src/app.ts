import { Game } from './components/game/game';
import { ImageCategory } from './models/imageCategory';
import { About } from './pages/about';
import { Settings } from './pages/settings';
import { Header } from './components/header/header';

export class App {
  private readonly header: Header;

  private readonly game: Game;

  private readonly content: HTMLDivElement;

  private readonly settings: Settings;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.header = new Header();
    this.settings = new Settings();
    this.content = document.createElement('div');
    this.content.classList.add('main');
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
    this.rootElement.appendChild(this.content);
  }

  async start() {
    const response = await fetch('./images.json');
    const categories: ImageCategory[] = await response.json();
    const animal = categories[0];
    const images = animal.images.map((item) => `${animal.category}/${item}`);
    this.game.startGame(images);
  }

  navigate() {
    return this.header.router();
  }
}
