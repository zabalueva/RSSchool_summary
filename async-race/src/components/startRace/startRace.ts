import { animationCar } from '../animation/animation';
import { getDriveEngine, getStartEngine } from '../stateEngine/stateEngine';

let drived = false;
const ID_STORAGE = 1;

function startRace() {
  const allCars = document.querySelectorAll('.car_img');
  const allPromisesCars:Response[] = [];
  if (!drived) {
    drived = true;
    document.querySelector('.button_race')?.classList.add('button_disabled');
    allCars.forEach(async (item) => {
      const speed = await getStartEngine(+((
        item as HTMLElement).previousSibling?.previousSibling as Element).classList[ID_STORAGE]);
      const drive = await getDriveEngine(+(item as HTMLElement).classList[ID_STORAGE]);
      if (drive.status === 500) {
        console.log('error 500 handled');
        /* stopAnimation(animation[(+(ev.target as HTMLElement).classList[ID_STORAGE])].id); */
      }
      allPromisesCars.push(drive);
      Promise.all(allPromisesCars).then(
        () => animationCar((item as HTMLElement), (speed.distance / 1000), speed.velocity),
      );
    });
  }
  drived = false;
}

export const getStartButton = async (): Promise<void> => {
  if (!document.querySelector('.button_race')) {
    const startButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      startButton, (document.getElementById('root') as Element).childNodes[0],
    );
    startButton.classList.add('form__button');
    startButton.classList.add('button_race');
    startButton.innerHTML = 'start race';
    startButton?.addEventListener('click', startRace);
  }
};

drived = false;
