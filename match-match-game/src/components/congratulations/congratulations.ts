import { BaseComponent } from '../base/base';
import './congratulations.scss';

export class Congratulations extends BaseComponent {
  constructor() {
    super('div', ['congratulations']);
    this.element.innerHTML = `<div class="congratulation__wrap">
      <p>Congratulations! You successfully found all matches!</p>
      <a href="#/bestScore"><button class="congrats__btn btn">OK</button></a>
      </p>
    </div>`;
  }

  redirect():void {
    const congratsButton = document.querySelector('.congrats__btn') as HTMLButtonElement;
    if (congratsButton) {
      congratsButton.addEventListener('click', () => {
        this.element.innerHTML = '';
      });
    }
  }
}
