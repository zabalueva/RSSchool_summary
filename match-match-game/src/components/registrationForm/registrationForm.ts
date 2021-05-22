import { BaseComponent } from '../base/base';
import './registrationForm.scss';
import { CustomValidation } from '../validation/validation';

export class RegistrationForm extends BaseComponent {
  private registrationButton?: HTMLButtonElement;

  private submitButton?: HTMLButtonElement;

  private cancelButton?: HTMLButtonElement;

  private isValid = false;

  constructor() {
    super('div', ['registrationForm']);
    this.element.innerHTML = `<div class="registration__wrap">
      <form class="registration__form form" action='POST' autocomplete="off" onsubmit="return validFunction()">
      <input class="form__input form__input_name" placeholder="Name">
      <input class="form__input form__input_surname" type="text" placeholder="Surname">
      <input class="form__input form__input_email" type="text" placeholder="Email">
      <button class="form__submit startButton">Add user</button>
      </form>
    </div>`;
    this.registrationButton = document.createElement('button');
    this.registrationButton.innerHTML = 'ADD USER';
    this.registrationButton.classList.add('startButton');
    this.cancelButton = document.createElement('button');
    this.cancelButton.innerHTML = 'CANCEL';
    this.cancelButton.classList.add('startButton');
    this.element.append(this.cancelButton);
  }

  validateForm() {
    console.log('start');
    this.element.append(this.registrationButton as Node);
    const nameInput = document.querySelector('.form__input_name') as HTMLInputElement;
    const surnameInput = document.querySelector('.form__input_surname') as HTMLInputElement;
    const submitButton = document.querySelector('.form__submit') as HTMLButtonElement;

    const inputs: HTMLInputElement[] = [];
    inputs.push(nameInput, surnameInput);

    let stopSubmit: boolean;
    if (submitButton) {
      submitButton.addEventListener('click', (e) => {
        // Пройдёмся по всем полям
        for (let i = 0; i < inputs.length; i++) {
          const input = inputs[i];
          // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
          if (input.checkValidity() === true) {
            const inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
            inputCustomValidation.checkValidity(input); // Выявим ошибки
            const customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
            input.setCustomValidity(customValidityMessage);

            // Добавим ошибки в документ
            const customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
            console.log(customValidityMessage);
            input.insertAdjacentHTML('afterend', `<p class="error-message">${customValidityMessageForHTML}</p>`);
            stopSubmit = true;
          } // закончился if
        } // закончился цикл

        if (stopSubmit) {
          e.preventDefault();
        }// Установим специальное сообщение об ошибке
      });
    }
  }
  /* private sight(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  } */
}
