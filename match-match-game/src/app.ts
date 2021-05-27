import { Header } from './components/header/header';
import { RegistrationForm } from './components/registrationForm/registrationForm';

export class App {
  private readonly header: Header;

  private readonly content: HTMLDivElement;

  private readonly registrationForm: RegistrationForm;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.registrationForm = new RegistrationForm();
    this.content = document.createElement('div');
    this.content.classList.add('main');
    this.rootElement.append(this.header.element);
    this.rootElement.append(this.registrationForm.element);
  }

  navigate() {
    this.rootElement.appendChild(this.content);
    this.registrationForm.validateForm();
  }
}
