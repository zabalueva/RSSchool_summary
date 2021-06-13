import { animationCar } from '../animation/animation';


function startRace(id, distance, velocity) {
  return animationCar(id, distance, velocity);
}

export const getStartButton = async (): Promise<void> => {
  if (!document.querySelector('.button_start')) {
    const startButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      startButton, (document.getElementById('root') as Element).childNodes[0],
    );
    startButton.classList.add('form__button');
    startButton.classList.add('button_start');
    startButton.innerHTML = 'start race';
    startButton?.addEventListener('click', startRace(id, distance, velocity));
  }
};