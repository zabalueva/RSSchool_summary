export class CustomValidation {
  private invalidities: string[] = [];

  checkValidity(input: HTMLInputElement): string[] {
    if (input.value === '') {
      this.addInvalidity('The field cannot be empty');
    }

    if (input.value.length > 30) {
      this.addInvalidity('The field cannot contain more than 30 symbols.');
    }

    if (input.type === 'email') {
      if (!input.value.match(/.+@.+\..+/i) && !input.value === false) {
        this.addInvalidity('Must comply with the standard email generation rule [RFC]');
      }
    }

    if (input.type === 'text') {
      if (!input.value.match(/\D/g) && !input.value === false) {
        this.addInvalidity('The field cannot be digits.');
      }

      if (input.value.match(/[^\p{L}\p{Nd}\p{Zs}]/gu)) {
        this.addInvalidity('The field cannot contain service characters.');
      }
    }

    return this.invalidities;
  }

  addInvalidity(message: string): void {
    this.invalidities.push(message);
  }

  getInvalidities(): string {
    return this.invalidities.join('. \n');
  }

  getInvaliditiesForHTML(): string {
    return this.invalidities.join('. <br>');
  }

  clearInvalidities(): void {
    this.invalidities = [];
  }
}
