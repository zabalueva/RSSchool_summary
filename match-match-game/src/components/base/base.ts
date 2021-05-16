export class BaseComponent {
  readonly element: HTMLElement;

  constructor(part: keyof HTMLElementTagNameMap = 'div', style: string[] = []) {
    this.element = document.createElement(part);
    this.element.classList.add(...style);
  }
}
