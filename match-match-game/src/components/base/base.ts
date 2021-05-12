export class BaseComponent {
  readonly element: HTMLElement;

  constructor(part: keyof HTMLElementTagNameMap = 'div') {
    this.element = document.createElement(part);
  }
}
