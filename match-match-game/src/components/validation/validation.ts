export class CustomValidation {
  private readonly invalidities: string[] = [];

  checkValidity(input: HTMLInputElement) {
    const { validity } = input;

    if (!validity.valueMissing) {
      this.addInvalidity('The field cannot be empty');
    }

    if (validity.patternMismatch) {
      this.addInvalidity('This is the wrong pattern for this field');
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
