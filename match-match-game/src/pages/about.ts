import { BaseComponent } from '../components/base/base';

export class About extends BaseComponent {
  private readonly about: HTMLDivElement;

  constructor() {
    super('div', ['about']);
    this.about = document.createElement('div');
    this.element.append(this.about);
    this.about.innerHTML = `<ul>
                            <li>Register</li>
    <li>Configure your game settings</li>
    <li> Start your new game! Remember card positions and match it before times up </li>
    </ul >`;
  }
}
