import { createWinner } from '../../controllers/server';
import { Winner, WinnerRequest } from '../../models/winner';
import { getWinners } from '../../store/store';
import { animationCar } from '../animation/animation';
import { getDriveEngine, getStartEngine } from '../stateEngine/stateEngine';

let drived = false;
const ID_STORAGE = 1;
const NAME_STORAGE = 2;
const COLOR_STORAGE = 3;

async function startRace() {
  const allCars = document.querySelectorAll('.car_img');
  const allPromisesCars:Response[] = [];
  const winners = await getWinners();
  let speedest = 0;
  let bestSpeed = 0;
  if (!drived) {
    drived = true;
    document.querySelector('.button_race')?.classList.add('button_disabled');
    allCars.forEach(async (item) => {
      const speed = await getStartEngine(+((
        item as HTMLElement).previousSibling?.previousSibling as Element).classList[ID_STORAGE]);

      const drive = await getDriveEngine(+((
        item as HTMLElement).previousSibling?.previousSibling as Element).classList[ID_STORAGE]);
      allPromisesCars.push(drive);
      Promise.all(allPromisesCars).then(
        () => animationCar((item as HTMLElement), (speed.distance / 1000), speed.velocity * 2),
      );
      if (drive.status === 500) {
        (item as HTMLElement).style.transform = 'translateX(100px)';
        console.log('error 500 handled');
        /* stopAnimation(animation[(+(ev.target as HTMLElement).classList[ID_STORAGE])].id); */
      }
      speedest = speed.velocity > speedest ? +((
        item as HTMLElement).previousSibling?.previousSibling as Element).classList[ID_STORAGE] : speedest;

      bestSpeed = speed.velocity > bestSpeed ? +((
        item as HTMLElement).previousSibling?.previousSibling as Element).classList[ID_STORAGE] : bestSpeed;

      let countWins = 0;
      winners.forEach((winner:Winner) => {
        if (winner.id === speedest) {
          countWins += 1;
        }
      });

      createWinner({
        id: speedest,
        wins: countWins,
        time: +(speed.distance / speed.velocity / 1000).toFixed(2),
        name: ((item as HTMLElement).previousSibling?.previousSibling as Element).classList[NAME_STORAGE],
        color: ((item as HTMLElement).previousSibling?.previousSibling as Element).classList[COLOR_STORAGE],
      });
    });
  }

  drived = false;
  return { winner: speedest, speed: bestSpeed };
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
