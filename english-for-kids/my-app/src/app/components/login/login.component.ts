import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public stopSubmit = false;

  clearForm(inputs:HTMLInputElement[]): void {
    for (let j = 0; j < inputs.length; j++) {
      inputs[j].value = '';
    }
    this.stopSubmit = false;
  }

  validateForm():void {
    const nameInput = document.querySelector('.form__input_name') as HTMLInputElement;
    const surnameInput = document.querySelector('.form__input_surname') as HTMLInputElement;
    const emailInput = document.querySelector('.form__input_email') as HTMLInputElement;
    const submitButton = document.querySelector('.form__submit') as HTMLButtonElement;
    const cancelButton = document.querySelector('.form__cancel') as HTMLButtonElement;

    const inputs: HTMLInputElement[] = [];
    inputs.push(nameInput, surnameInput, emailInput);

    /* if (submitButton) {
      submitButton.addEventListener('click', (e) => {
        for (let i = 0; i < inputs.length; i++) {
          const input = inputs[i];
          const inputCustomValidation = new CustomValidation();
          if (inputCustomValidation.checkValidity(input).length) {
            const customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
            input.insertAdjacentHTML('afterend', `<p class="error-message">${customValidityMessageForHTML}</p>`);
            this.stopSubmit = true;
          }
          if (cancelButton) {
            cancelButton.addEventListener('click', (event) => {
              event.preventDefault();
              inputCustomValidation.clearInvalidities();
              this.clearForm(inputs);
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
          submitButton.classList.remove('btn_inactive');
          document.querySelector('.startButton')?.classList.remove('startButton_disabled');
          this.dataBase?.openInitDB();
          this.dataBase?.addUser(nameInput.value, surnameInput.value, emailInput.value);
          this.clearForm(inputs);
        }
      });
    }

    if (cancelButton) {
      cancelButton.addEventListener('click', (event) => {
        event.preventDefault();
        this.clearForm(inputs);
        const errors = document.querySelectorAll('.error-message');
        if (errors) {
          Array.from(document.querySelectorAll('.form__input'))?.forEach((el) => {
            (el.nextSibling as Element).innerHTML = '';
          });
        }
      });
    } */
  }
}