import { BaseComponent } from '../components/base/base';

export class Winners extends BaseComponent {
  private readonly winners: HTMLDivElement;

  constructor() {
    super('div', ['winners']);
    this.winners = document.createElement('div');
    this.element.append(this.winners);
  }

  getView = {
    render: ():string => `
    <div class="page__winners">
    Winners
    </div>
      `,
  };

  destroy(): void {
    this.element.innerHTML = '';
    Array.from(document.querySelectorAll('.page__winners'))?.forEach((el) => el.classList.add('hidden'));
  }
}
