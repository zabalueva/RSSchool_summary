import { BaseComponent } from '../base/base';
import './registrationForm.scss';
import { CustomValidation } from '../../services/validation';
import { Header } from '../header/header';

export class RegistrationForm extends BaseComponent {
  private registrationButton?: HTMLButtonElement;

  private submitButton?: HTMLButtonElement;

  private cancelButton?: HTMLButtonElement;

  private stopSubmit = false;

  constructor() {
    super('div', ['registrationForm']);
    this.element.innerHTML = `<div class="registration__wrap">
      <form class="registration__form form" action='POST' autocomplete="off" onsubmit="return validFunction()">
      <input class="form__input form__input_name" type="text" placeholder="Name" required>
      <input class="form__input form__input_surname" type="text" placeholder="Surname" required>
      <input class="form__input form__input_email" type="email" placeholder="Email" required>
      <button class="form__submit formButton">Add user</button>
      <button class="form__cancel formButton">Cancel</button>
      </form>
    </div>`;
    /* this.registrationButton = document.createElement('button');
    this.registrationButton.innerHTML = 'ADD USER';
    this.registrationButton.classList.add('startButton'); */
    /* this.cancelButton = document.createElement('button');
    this.cancelButton.innerHTML = 'CANCEL';
    this.cancelButton.classList.add('startButton');
    this.element.append(this.cancelButton); */
  }

  validateForm() {
    /* this.element.append(this.registrationButton as Node); */
    const nameInput = document.querySelector('.form__input_name') as HTMLInputElement;
    const surnameInput = document.querySelector('.form__input_surname') as HTMLInputElement;
    const emailInput = document.querySelector('.form__input_email') as HTMLInputElement;
    const submitButton = document.querySelector('.form__submit') as HTMLButtonElement;
    const cancelButton = document.querySelector('.form__cancel') as HTMLButtonElement;

    const inputs: HTMLInputElement[] = [];
    inputs.push(nameInput, surnameInput, emailInput);

    if (submitButton) {
      submitButton.addEventListener('click', (e) => {
        for (let i = 0; i < inputs.length; i++) {
          const input = inputs[i];

          const inputCustomValidation = new CustomValidation();
          inputCustomValidation.checkValidity(input);

          if (inputCustomValidation.checkValidity(input).length) {
            const customValidityMessage = inputCustomValidation.getInvalidities();
            input.setCustomValidity(customValidityMessage);

            const customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
            input.insertAdjacentHTML('afterend', `<p class="error-message">${customValidityMessageForHTML}</p>`);
            this.stopSubmit = true;
          }

          if (cancelButton) {
            cancelButton.addEventListener('click', (e) => {
              e.preventDefault();
              inputCustomValidation.clearInvalidities();
              for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
              }
            });
          }
        }

        if (this.stopSubmit) {
          submitButton.classList.add('btn_inactive');
          e.preventDefault();
        }

        if (!this.stopSubmit) {
          e.preventDefault();
          this.element.classList.add('registrationForm_hidden');
        }
      });
    }


  }
}
