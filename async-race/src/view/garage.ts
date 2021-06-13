import { BaseComponent } from '../components/base/base';
import {
  createCar, deleteCar, updateCar,
} from '../controllers/server';
import './garage.scss';
import { getRandomButton } from '../components/randomButton/randomButton';
import { getCarsImage } from '../components/carsImage/carsImage';
import { pagination, updateCarsImage } from '../components/pagination/pagination';
import { getCount } from '../components/getCount/getCount';
import { animationCar, stopAnimation } from '../components/animation/animation';
import { getStartEngine, getDriveEngine } from '../components/stateEngine/stateEngine';
import { getStartButton } from '../components/startRace/startRace';
import { animation } from '../store/store';

let selectedId:number;

const ID_STORAGE = 1;
export class Garage extends BaseComponent {
  private readonly garageView: HTMLDivElement;

  constructor() {
    super('div', ['garageView']);
    this.garageView = document.createElement('div');
    this.element.append(this.garageView);
    getRandomButton();
    getStartButton();
    this.getSelectButton();
  }

  getView = {
    render: (): string => `
    <div class="garageView">
      <div class="garage__create">
      <input class="form__input form__input_brand" type="text" placeholder="Create car brand">
      <input class="form__input form__input_color" type="color">
      </div>
      <div class="garage__update">
      <input class="form__input form__update_brand" type="text" placeholder="Update car brand">
      <input class="form__input form__update_color" type="color">
      </div>
      <div class="page__garage garage">
      ${pagination()}
      <p>${getCount()}</p>
      </div>
      <div class="garage__listCar listCar">
      <p>${getCarsImage(1)}</p>
      ${this.getSelectButton()}
      ${this.getDeleteButton()}
      ${this.getCreateButton()}
      ${this.getUpdateButton()}
      ${this.getStartEngineButtons()}
    </div>
    <div class="pagination">
    </div>
    </div>
      `,
  };

  getCreateButton = async (): Promise<void> => {
    if (!document.querySelector('.button_create')) {
      const createButton = document.createElement('button');
      (document.getElementById('root') as Element).insertBefore(
        createButton, (document.getElementById('root') as Element).childNodes[2],
      );
      createButton.classList.add('form__button');
      createButton.classList.add('button_create');
      createButton.innerHTML = 'create car';
      createButton?.addEventListener('click', this.createNewCar);
      /* createButton?.addEventListener('click', getCarsImage); */
      createButton?.addEventListener('click', getCount);
      createButton?.addEventListener('click', this.getDeleteButton);
    }
  };

  getUpdateButton = async (): Promise<void> => {
    if (!document.querySelector('.button_update')) {
      const updateButton = document.createElement('button');
      (document.getElementById('root') as Element).insertBefore(
        updateButton, (document.getElementById('root') as Element).childNodes[3],
      );
      updateButton.classList.add('form__button');
      updateButton.classList.add('button_update');
      updateButton.innerHTML = 'update car';
      updateButton?.addEventListener('click', this.updateSelectedCar);
      updateButton?.addEventListener('click', updateCarsImage);
      updateButton?.addEventListener('click', this.getSelectButton);
      updateButton?.addEventListener('click', this.getDeleteButton);
    }
  };

  updateSelectedCar = async (): Promise <Response> => updateCar(
    {
      name: (document.querySelector('.form__update_brand') as HTMLInputElement).value || '',
      color: (document.querySelector('.form__update_color') as HTMLInputElement).value,
    }, selectedId,
  );

  createNewCar = async (): Promise <void> => {
    createCar(
      {
        name: (document.querySelector('.form__input_brand') as HTMLInputElement).value || '',
        color: (document.querySelector('.form__input_color') as HTMLInputElement).value,
      },
    );
  };

  getSelectButton = async (): Promise<Node[]> => {
    const selectButtons = await getCarsImage(1);
    selectButtons.forEach((e: Node) => e.addEventListener(
      'click', (ev: Event) => {
        selectedId = +(ev.target as Element).classList[ID_STORAGE];
      },
    ));
    return Array.from(document.querySelectorAll('.deleteCar'));
  };

  getDeleteButton = async (): Promise<Node[]> => {
    const deleteButtons = await this.getSelectButton();
    deleteButtons.forEach((e) => e.addEventListener(
      'click', (ev:Event) => {
        deleteCar(Number(((ev.target as Element).nextElementSibling?.classList[ID_STORAGE])));
      },
    ));
    deleteButtons.forEach((e) => e.addEventListener(
      'click', () => getCarsImage,
    ));
    deleteButtons.forEach((e) => e.addEventListener(
      'click', () => getCount,
    ));
    deleteButtons.forEach((e) => e.addEventListener(
      'click', () => this.getSelectButton,
    ));
    return Array.from(document.querySelectorAll('.button_start'));
  };

  getStartEngineButtons = async (): Promise<void> => {
    let startButtons = await this.getDeleteButton();
    if (startButtons) {
      if (startButtons.length < Array.from(document.querySelectorAll('.button_start')).length) {
        startButtons = Array.from(document.getElementsByClassName('.button_start'));
      }
      console.log(Array.from(document.querySelectorAll('.button_start')));
      startButtons.forEach((e: Node) => e.addEventListener(
        'click', async (ev: Event) => {
          console.log('dfj');
          const speed = await getStartEngine(+(ev.target as HTMLElement).classList[ID_STORAGE]);
          /* animation[+(ev.target as HTMLElement).classList[ID_STORAGE]] =  */animationCar(((
            ev.target as HTMLElement).nextSibling?.nextSibling?.nextSibling?.nextSibling as HTMLElement
          ), (speed.distance / 1000), speed.velocity);
          const drive = await getDriveEngine(+(ev.target as HTMLElement).classList[ID_STORAGE]);
          if (drive.status === 500) {
            console.log('error 500 handled');
            /* stopAnimation(animation[(+(ev.target as HTMLElement).classList[ID_STORAGE])].id); */
          }
        },
      ));
    }
  };

  getDriveCars = async (): Promise<void> => {
    const raceButtons = await this.getDeleteButton();
    if (raceButtons) {
      raceButtons.forEach((e: Node) => e.addEventListener(
        'click', async (ev: Event) => {
          const speed = await getStartEngine(+(ev.target as HTMLElement).classList[ID_STORAGE]);
          console.log(speed);
          animationCar(((
            ev.target as HTMLElement).nextSibling?.nextSibling?.nextSibling?.nextSibling as HTMLElement
          ), (speed.distance / 1000), speed.velocity);
        },
      ));
    }
  };
}
