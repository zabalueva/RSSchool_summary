import { startEngine } from '../../controllers/server';
import { getRandomCars } from '../../shared/generatorRandom';

export const getStartEngine = async (id:number)=> {
  const speedParams = await startEngine(id);
  return {
    velocity: speedParams.velocity,
    distance: speedParams.distance
  }
};

export const getStopEngineButtons = async (): Promise<void> => {
  if (!document.querySelector('.button_stop')) {
    const stopButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      stopButton, (document.getElementById('root') as Element).childNodes[0],
    );
    stopButton.classList.add('form__button');
    stopButton.classList.add('button_stop');
    stopButton.innerHTML = 'random car';
    stopButton?.addEventListener('click', getRandomCars);
  }
};
