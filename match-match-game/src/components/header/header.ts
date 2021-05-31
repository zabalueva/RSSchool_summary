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
    this.startButton.classList.add('startButton_disabled');

    this.element.append(this.menuAbout);
    this.element.append(this.menuSettings);
    this.element.append(this.menuBestScore);

    this.element.append(this.startButton);

    this.menuAbout.innerHTML = '<a href="#/about" class="menu__item">About</a> ';
    this.menuSettings.innerHTML = '<a href="#/settings" class="menu__item">Settings</a>';
    this.menuBestScore.innerHTML = '<a href="#/bestscore" class="menu__item">BestScore</a>';

    this.startButton.addEventListener('click', async () => {
      document.getElementsByClassName('registrationForm')[0]?.classList.add('registrationForm_hidden');
      this.toggleStartButton();
      if (!this.game.isGame) {
        this.element?.nextSibling?.nextSibling?.appendChild(this.game.element);
        this.game.startSettings();
      }
    });
  }

  addStartButton():void {
    this.startButton?.classList.remove('startButton_disabled');
    this.startButton.addEventListener('click', async () => {
      document.getElementsByClassName('registrationForm')[0]?.classList.add('registrationForm_hidden');
      this.toggleStartButton();
      if (!this.game.isGame) {
        this.element?.nextSibling?.nextSibling?.appendChild(this.game.element);
        this.game.startSettings();
      }
    });
  }

  toggleStartButton():void {
    if (!this.game.isGame) {
      this.startButton.innerHTML = 'STOP GAME';
    } else {
      this.game.stopGame();
      this.startButton.innerHTML = 'START GAME';
    }
  }
}
