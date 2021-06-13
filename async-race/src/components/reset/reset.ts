import { animationCar } from '../animation/animation';

let car:HTMLElement;

function getSpeedParams() {
  return 130;
}

function getIdParams() {
  return car;
}
function getDistanceParams() {
  return 100;
}

function resetAllCars() {
  return animationCar(getIdParams(), 0, getSpeedParams());
}

export const getResetButton = async (): Promise<void> => {
  if (!document.querySelector('.button_reset')) {
    const startButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      startButton, (document.getElementById('root') as Element).childNodes[0],
    );
    startButton.classList.add('form__button');
    startButton.classList.add('button_reset');
    startButton.innerHTML = 'reset';
    startButton?.addEventListener('click', resetAllCars);
  }
};
