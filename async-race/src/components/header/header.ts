import { BaseComponent } from '../base/base';
import './header.scss';

export class Header extends BaseComponent {
  private readonly garage: HTMLAnchorElement;

  private readonly winners: HTMLAnchorElement;

  constructor() {
    super('div', ['header']);

    this.garage = document.createElement('a');
    this.winners = document.createElement('a');

    this.element.append(this.garage);
    this.element.append(this.winners);

    this.garage.innerHTML = '<a href="#/garage" class="menu__item">Garage</a> ';
    this.winners.innerHTML = '<a href="#/winners" class="menu__item">Winners</a>';
  }
}
