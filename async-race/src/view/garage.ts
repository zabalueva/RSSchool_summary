import { BaseComponent } from '../components/base/base';
import { getAllCars, MAX_CARS_ON_PAGE } from '../controllers/server';
import { Car } from '../models/car';
import { GarageModel } from '../models/garageModel';
import { getCars } from '../store/store';

const FIRST_STATE_GARAGE = 5;

const renderTotalquantityCars = async () => {
  const cars = await getCars();
  const quantity = cars.length;
}

export class Garage extends BaseComponent {
  private readonly garageView: HTMLDivElement;

  constructor() {
    super('div', ['garageView']);
    this.garageView = document.createElement('div');
    renderTotalquantityCars();
  }

  getView={
    render: (): string => `
    <div class="page__garage garage">
    <p>${this.getCount()}</p>
    </div>
    <div class="garage__listCar">
    <p>${this.getCarsImage()}</p>
    </div>
      `,
  };

  getCount = async () => {
    const cars = await getCars();
    const quantity = cars.length;
    const pageNumber = Math.ceil(quantity / MAX_CARS_ON_PAGE);
    const el = `<div>Garage ${quantity}<div>
    <div>Page ${pageNumber}<div>`;
    document.getElementsByClassName('page__garage')[0].innerHTML = el
  };

  getCarsImage = async () => {
    const cars = await getCars();
    console.log(cars)
    cars.forEach((el:Car) => el.name);
    const view = `<div>cars ${cars[0].name}<div>`
    document.getElementsByClassName('garage__listCar')[0].innerHTML = view
  };

  destroy(): void {
    this.element.innerHTML='';
    Array.from(document.querySelectorAll('.page__cars'))?.forEach((el) => el.classList.add('hidden'));
  }
}
