import { Header } from './components/header/header';
import { getAllCars } from './controllers/server';

export class App {
  private readonly content: HTMLDivElement;

  private header: Header;

  private cars: Promise<any>;

  constructor(private readonly rootElement: HTMLElement) {
    this.content = document.createElement('div');

    this.header = new Header();
    this.content.classList.add('main');
    this.rootElement.append(this.header.element);
    this.cars = getAllCars(1);
    this.content.innerHTML = `${this.cars}`;
  }

  navigate(): void {
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.content);
  }
}
