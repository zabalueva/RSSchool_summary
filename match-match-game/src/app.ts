import { Game } from './components/game/game';
import { ImageCategory } from './models/imageCategory';
import { About } from './pages/about';
import { Settings } from './pages/settings';
import { Header } from './components/header/header';
import { RegistrationForm } from './components/registrationForm/registrationForm';

export class App {
  private readonly header: Header;

  private readonly game: Game;

  private readonly content: HTMLDivElement;

  private readonly startButton: HTMLButtonElement;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.header = new Header();
    this.startButton = document.createElement('button');
    this.startButton.innerHTML = 'START!';
    this.content = document.createElement('div');
    this.content.classList.add('main');
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
  }

  navigate() {
    this.rootElement.appendChild(this.content);
    this.rootElement.appendChild(this.startButton);
    this.startButton.classList.add('startButton');
    this.startButton.addEventListener('click', async () => {
      console.log('dhfg');
      const response = await fetch('./images.json');
      const categories: ImageCategory[] = await response.json();
      const animal = categories[0];
      const images = animal.images.map((item) => `${animal.category}/${item}`);
      this.game.startGame(images);
    });
  }
}
