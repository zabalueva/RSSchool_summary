export class CustomValidation {
  private invalidities: string[] = [];

  checkValidity(input: HTMLInputElement) {
    if (input.value === '') {
      this.addInvalidity('The field cannot be empty');
    }

    if (input.type === 'email') {
      if (!input.value.match(/.+@.+\..+/i)) {
        this.addInvalidity('Must comply with the standard email generation rule [RFC]');
      }
    }

    if (input.type === 'text') {
      if (!input.value.match(/\D/g) && !input.value === false) {
        this.addInvalidity('The field cannot be digits.');
      }

      if (input.value.match(/[^\p{L}\p{Nd}]/gu)) {
        this.addInvalidity('The field cannot contain service characters.');
      }

      /* if (input.value.match(/ /g)) {
        this.addInvalidity('The field cannot contain more than one word.');
      } */

      if (input.value.length > 30) {
        this.addInvalidity('The field cannot contain more than 30 symbols.');
      }
    }

    return this.invalidities;
  }

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity(message: string) {
    this.invalidities.push(message);
  }

  // Получаем общий текст сообщений об ошибках
  getInvalidities() {
    return this.invalidities.join('. \n');
  }

  getInvaliditiesForHTML() {
    return this.invalidities.join('. <br>');
  }

  clearInvalidities() {
    this.invalidities = [];
  }
}
