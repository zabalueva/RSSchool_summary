import { BaseComponent } from '../base/base';
import { Route } from '../../models/route';
import './header.scss';
import { About } from '../../pages/about';
import { Settings } from '../../pages/settings';
import { BestScore } from '../../pages/bestScore';

export class Header extends BaseComponent {
  private readonly menuAbout: HTMLAnchorElement;

  private readonly menuSettings: HTMLAnchorElement;

  private readonly menuBestScore: HTMLAnchorElement;

  private readonly bestScore: BestScore;

  private readonly about: About;

  private readonly settings: Settings;

  constructor() {
    super('div', ['header']);
    this.menuAbout = document.createElement('a');
    this.menuSettings = document.createElement('a');
    this.menuBestScore = document.createElement('a');

    this.element.append(this.menuAbout);
    this.element.append(this.menuBestScore);
    this.element.append(this.menuSettings);

    this.menuAbout.innerHTML = '<a href="#/about" class="menu__item">About</a> ';
    this.menuSettings.innerHTML = '<a href="#/settings" class="menu__item">Settings</a>';
    this.menuBestScore.innerHTML = '<a href="#/bestScore" class="menu__item">BestScore</a>';

    this.about = new About();
    this.settings = new Settings();
    this.bestScore = new BestScore();
  }
}
