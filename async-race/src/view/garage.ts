import { BaseComponent } from '../components/base/base';
import { getAllCars } from '../controllers/server';
import { GarageModel } from '../models/garageModel';
import { getCars } from '../store/store';

const FIRST_STATE_GARAGE = 5;
let garageCarCount = getAllCars(1);

getCars();
console.log(getCars())
let quantityCars = getCars().then((res)=> res).then((result) => console.log(result.length));
console.log(quantityCars)

export class Garage extends BaseComponent {
  private readonly garageView: HTMLDivElement;

  public allCars: any;

  public pageNumber: number;

  constructor() {
    super('div', ['garageView']);
    this.garageView = document.createElement('div');
    this.pageNumber=1;
    this.allCars = getCars();
  }

  getView={
    render: (): string => `
    <div class="page">
    <p>Garage(${quantityCars})</p>
    </div>
    <p>Page ${this.allCars.then((res:any)=>res)}</p>
    <div class="page__cars cars-list">
    <p> </p>
    </div>
      `,
  };

  /* getCount = async () => {
    const quantityCarsAll = await getCars.then((res) => res.count);
    if (quantityCarsAll) {
      quantityCars=+quantityCarsAll;
    }
    console.log(quantityCars)
    return quantityCars;
  }; */

  destroy(): void {
    this.element.innerHTML='';
    Array.from(document.querySelectorAll('.page__cars'))?.forEach((el) => el.classList.add('hidden'));
  }
}
