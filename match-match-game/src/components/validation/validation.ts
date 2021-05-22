export class CustomValidation {
  private readonly invalidities: string[] = [];

  checkValidity(input: HTMLInputElement) {
    const { validity } = input;

    if (validity.valueMissing) {
      this.addInvalidity('The field cannot be empty');
    }

    if (!input.value.match(/\D/g)) {
      this.addInvalidity('The field cannot be digits.');
    }

    if (input.value.match(/\W/g)) {
      this.addInvalidity('The field cannot contain service characters.');
    }

    if (input.value.match(/ /g)) {
      this.addInvalidity('The field cannot contain more than one word.');
    }
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
}
