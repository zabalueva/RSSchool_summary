import { startEngine, driveEngine } from '../../controllers/server';
import { getRandomCars } from '../../shared/generatorRandom';

export const getStartEngine = async (id:number):Promise<{
  velocity: number,
  distance: number,
}> => {
  const speedParams = await startEngine(id);
  return {
    velocity: speedParams.velocity,
    distance: speedParams.distance,
  };
};

export const getDriveEngine = async (id:number):Promise<Response> => {
  const drived = await driveEngine(id);
  return drived;
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
