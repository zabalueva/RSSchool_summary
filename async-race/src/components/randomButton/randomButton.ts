import { getAllRandomCars } from '../../shared/generatorRandom';
import { getCount } from '../getCount/getCount';

export const getRandomButton = async (): Promise<void> => {
  if (!document.querySelector('.button_random')) {
    const randomButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      randomButton, (document.getElementById('root') as Element).childNodes[0],
    );
    randomButton.classList.add('form__button');
    randomButton.classList.add('button_random');
    randomButton.innerHTML = 'generate random car';
    randomButton?.addEventListener('click', getAllRandomCars);
    randomButton?.addEventListener('click', getCount);
  }
};
