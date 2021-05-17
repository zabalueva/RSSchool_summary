import { Game } from './components/game/game';
import { ImageCategory } from './models/imageCategory';
import { About } from './pages/about';
import { Settings } from './pages/settings';
import { Header } from './components/header/header';

export class App {
  private readonly header: Header;

  private readonly game: Game;

  private readonly about: About;

  private readonly settings: Settings;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.header = new Header();
    this.about = new About();
    this.settings = new Settings();
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
    this.rootElement.appendChild(this.about.element);
    this.rootElement.appendChild(this.settings.element);
  }

  async start() {
    const response = await fetch('./images.json');
    const categories: ImageCategory[] = await response.json();
    const animal = categories[0];
    console.log('start1');
    const images = animal.images.map((item) => `${animal.category}/${item}`);
    this.game.startGame(images);
  }
}
