import { createWinner } from '../../controllers/server';
import { Winner } from '../../models/winner';
import { getWinners } from '../../store/store';
import { animationCar } from '../animation/animation';
import { getDriveEngine, getStartEngine } from '../stateEngine/stateEngine';

let drived = false;
const ID_STORAGE = 1;
const NAME_STORAGE = 2;
const COLOR_STORAGE = 3;
let bestTime:number;
let bestName;
let bestColor;

function getCreateWinner(id:number, wins:number, time:number, name:string, color:string) {
  return createWinner({
    id,
    wins,
    time,
    name,
    color,
  });
}

async function startRace() {
  const allCars = document.querySelectorAll('.car_img');
  const allPromisesCars:Response[] = [];
  const winners = await getWinners();
  const speeds:number[] = [];
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
      speeds.push(speed.velocity);
      speedest = speed.velocity > speedest ? +((
        item as HTMLElement).previousSibling?.previousSibling as Element).classList[ID_STORAGE] : speedest;

      bestSpeed = speed.velocity > bestSpeed ? speed.velocity : bestSpeed;
      bestTime = +(speed.distance / speed.velocity / 1000).toFixed(2) > bestTime ? +(speed.distance / speed.velocity / 1000).toFixed(2) : bestTime;

      let countWins = 1;
      winners.forEach((winner:Winner) => {
        if (winner.id === speedest) {
          countWins += 1;
        }
      });
      getCreateWinner(
        bestSpeed,
        countWins,
        +(speed.distance / speed.velocity / 1000).toFixed(2),
        ((item as HTMLElement).previousSibling?.previousSibling as Element).classList[NAME_STORAGE],
        ((item as HTMLElement).previousSibling?.previousSibling as Element).classList[COLOR_STORAGE],
      );
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
