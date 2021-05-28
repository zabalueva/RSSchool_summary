import { BaseComponent } from '../base/base';
import { Game } from '../../services/game';
import './header.scss';

export class Header extends BaseComponent {
  private readonly menuAbout: HTMLAnchorElement;

  private readonly menuSettings: HTMLAnchorElement;

  private readonly menuBestScore: HTMLAnchorElement;

  private startButton: HTMLButtonElement;

  private readonly game: Game;

  constructor() {
    super('div', ['header']);

    this.game = new Game();
    this.menuAbout = document.createElement('a');
    this.menuSettings = document.createElement('a');
    this.menuBestScore = document.createElement('a');

    this.startButton = document.createElement('button');
    this.startButton.innerHTML = 'START GAME';
    this.startButton.classList.add('startButton');

    this.element.append(this.menuAbout);
    this.element.append(this.menuBestScore);
    this.element.append(this.menuSettings);
    this.element.append(this.startButton);

    this.menuAbout.innerHTML = '<a href="#/about" class="menu__item">About</a> ';
    this.menuSettings.innerHTML = '<a href="#/settings" class="menu__item">Settings</a>';
    this.menuBestScore.innerHTML = '<a href="#/bestScore" class="menu__item">BestScore</a>';

    this.startButton.addEventListener('click', async () => {
      document.getElementsByClassName('registrationForm')[0]?.classList.add('registrationForm_hidden');

      if (!this.game.isGame) {
        this.startButton.innerHTML='STOP GAME';
        this.element?.nextSibling?.nextSibling?.appendChild(this.game.element);
        this.game.startSettings();
      } else {
        this.game.stopGame();
        this.startButton.innerHTML='START GAME';
      }
    });
  }
}
