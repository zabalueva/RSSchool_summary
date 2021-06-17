import { BaseComponent } from '../components/base/base';
import { getAllWinners, getCountWinners } from '../controllers/server';
import { getWinners, getCommonCountWinners } from '../store/store';
import { Winner } from '../models/winner';
import './winners.scss';
import { getAllCountWinners } from '../components/getCountWinners/getCountWinners';
import { getWinnersList } from '../components/getWinnersList/getWinnersList';

export const MAX_CARS_ON_PAGE = 10;
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
    <div class="pagination">
    </div>
    Winners
    ${getAllCountWinners()}

    ${getWinnersList(1)}
    </div>
    <div class="winners__table"></div>
    <div class="pagination">
    </div>
      `,
  };
}
