/* На странице Best score должен отображаться топ 10 игроков. *//*
export class Best {

}
 */
import { Page } from '../models/page';
import { BaseComponent } from '../components/base/base';

/* export const bestScore: Page = {
  render: `<section>
        <p>Best</p>
      </section> `,
}; */
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
