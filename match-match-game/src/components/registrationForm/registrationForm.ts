import { BaseComponent } from '../base/base';
import './registrationForm.scss';

export class RegistrationForm extends BaseComponent {
  private nameInput?: string;

  private surnameInput?: string;

  private emailInput?: string;

  private registrationButton?: HTMLButtonElement;

  private cancelButton?: HTMLButtonElement;

  private isValid = false;

  constructor() {
    super('div', ['registrationForm']);
    this.element.innerHTML = `<form class="registration__form form" action='POST'>
    <input class="form__input" type="text" placeholder="Name">
    <input class="form__input" type="text" placeholder="Email">
    <input class="form__input" type="text" placeholder="Your text here (300 max)">
    <button class="form__btn btn">Submit</button>
  </form>`;
    this.registrationButton = document.createElement('button');
    this.element.append(this.registrationButton);
    this.cancelButton = document.createElement('button');
    this.element.append(this.cancelButton);
  }

  validateName() {
    if (this.nameInput?.match(new RegExp('d', 'gm'))) {
      this.registrationButton?.classList.add('active');
    }
    return this.nameInput?.match(new RegExp('d', 'gm'));
  }

  validateSurname() {
    if (this.surnameInput?.match(new RegExp('d', 'gm'))) {
      this.registrationButton?.classList.add('active');
    }
    return this.surnameInput?.match(new RegExp('d', 'gm'));
  }

  validateEmail() {
    if (this.emailInput?.match(new RegExp('d', 'gm'))) {
      this.registrationButton?.classList.add('active');
    }
    return this.surnameInput?.match(new RegExp('d', 'gm'));
  }

  /* private sight(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  } */
}
