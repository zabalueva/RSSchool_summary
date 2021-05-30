import { BaseComponent } from '../components/base/base';
import { DataBase } from '../controllers/dbConnect/dbConnect';

export class BestScore extends BaseComponent {
  private readonly bestScore: HTMLDivElement;

  private dataBase?: DataBase;

  constructor() {
    super('div', ['bestScore']);
    this.bestScore = document.createElement('div');
    this.element.append(this.bestScore);
    this.dataBase = new DataBase();
    this.dataBase?.getBestPlayers();
  }

  getView = {
    render: ():string => `
    <div class="bestScore">The best</div>
    <div>${JSON.stringify(this.dataBase?.getBestPlayers())}</div>
      `,
  };

  destroy(): void {
    this.element.innerHTML = '';
    document.querySelector('.bestScore')?.classList.add('settings_hidden');
  }
}
