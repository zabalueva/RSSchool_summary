import { BaseComponent } from '../components/base/base';
import { RegistrationForm } from '../components/registrationForm/registrationForm';

export class About extends BaseComponent {
  private readonly about: HTMLDivElement;

  private readonly registrationForm: RegistrationForm;

  constructor() {
    super('div', ['about']);
    this.about = document.createElement('div');
    this.element.append(this.about);
    this.registrationForm = new RegistrationForm();
    this.element.append(this.registrationForm.element);
  }

  getView = {
    render: () => `
    <ul>
    <li>Register</li>
<li>Configure your game settings</li>
<li> Start your new game! Remember card positions and match it before times up </li>
</ul >

      `,
  };
}
