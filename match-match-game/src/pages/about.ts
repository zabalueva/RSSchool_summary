import { BaseComponent } from '../components/base/base';

export class About extends BaseComponent {
  private readonly about: HTMLDivElement;

  constructor() {
    super('div', ['about']);
    this.about = document.createElement('div');
    this.element.append(this.about);
  }

  getView = {
    render: ():string => `
    <div class="rules">
    <p>Register</p>
    </div >
    <div class="rules rules_step2">
    <p>Configure your game settings</p>
    </div >
    <div class="rules rules_step3">
    <p> Start your new game! Remember card positions and match it before times up </p>
    </div >
      `,
  };

  destroy(): void {
    this.element.innerHTML = '';
    document.querySelector('.rules')?.classList.add('settings_hidden');
  }
}
