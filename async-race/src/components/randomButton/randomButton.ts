import { getRandomCars } from '../../shared/generatorRandom';

export const getRandomButton = async (): Promise<void> => {
  if (!document.querySelector('.button_random')) {
    const randomButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      randomButton, (document.getElementById('root') as Element).firstChild,
    );
    randomButton.classList.add('form__button');
    randomButton.classList.add('button_random');
    randomButton.innerHTML = 'random car';
    randomButton?.addEventListener('click', getRandomCars);
  }
};
