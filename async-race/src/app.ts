import { Header } from './components/header/header';

export class App {
  private readonly content: HTMLDivElement;

  private header: Header;

  constructor(private readonly rootElement: HTMLElement) {
    this.content = document.createElement('div');

    this.header = new Header();
    this.content.classList.add('main');
    this.rootElement.append(this.header.element);
  }

  navigate(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.content);
  }
}
