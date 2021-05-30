import { BaseComponent } from '../components/base/base';

export class BestScore extends BaseComponent {
  private readonly bestScore: HTMLDivElement;

  constructor() {
    super('div', ['bestScore']);
    this.bestScore = document.createElement('div');
    this.element.append(this.bestScore);
  }

  getView = {
    render: ():string => `
    <div>The best</div>
      `,
  };
}
