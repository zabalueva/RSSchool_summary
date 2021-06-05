import { BaseComponent } from '../components/base/base';
import { getAllCars } from '../controllers/server';
import { GarageModel } from '../models/garageModel';
import * as garage from '../store/store';

let quantityCars = 4;

export class Garage extends BaseComponent {
  private readonly garageView: HTMLDivElement;

  public allCars: any;

  public pageNumber: number;

  constructor() {
    super('div', ['garageView']);
    this.garageView = document.createElement('div');
    this.pageNumber = 1;
  }

  getView = {
    render: ():string => `
    <div class="rules">
    <p>Garage(${quantityCars})</p>
    </div >
    <div class="rules rules_step2">
    <p>Page ${this.pageNumber}</p>
    </div >
    <div class="rules rules_step3">
    <p> </p>
    </div>
      `,
  };

  getCount = async () => {
    const quantityCarsAll = await garage.getCars().then((res) => res.count);
    if (quantityCarsAll) {
      quantityCars = +quantityCarsAll;
    }
    return quantityCars;
  };

  destroy(): void {
    this.element.innerHTML = '';
    Array.from(document.querySelectorAll('.rules'))?.forEach((el) => el.classList.add('hidden'));
  }
}
