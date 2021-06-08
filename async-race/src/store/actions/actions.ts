import { deleteCar } from '../../controllers/server';

export const selectCar = () => {
  (document.querySelector('.selectCar') as HTMLButtonElement).addEventListener('click', (e) => { console.log(e.target); });
  console.log('dksjf');
};

export const deleteSelectCar = async () => deleteCar(2);
