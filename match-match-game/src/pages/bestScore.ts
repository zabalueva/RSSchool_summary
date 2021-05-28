import { BaseComponent } from '../components/base/base';

export class BestScore extends BaseComponent {
  private readonly bestScore: HTMLDivElement;

  constructor() {
    super('div', ['about']);
    this.bestScore = document.createElement('div');
    this.element.append(this.bestScore);
  }

  getView = {
    render: () => `
    <div>The best</div>
      `,
  };

  
}
