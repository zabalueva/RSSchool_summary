import { animationCar } from '../animation/animation';
import { getDriveEngine, getStartEngine } from '../stateEngine/stateEngine';

const ID_STORAGE = 1;

let drived = false;

export const getStartEngineButtons = async (): Promise<void> => {
  const startHandler = document.addEventListener('click', async (e) => {
    if ((e.target as Element)?.classList.contains('button_start')) {
      if (!drived) {
        drived = true;
        (e.target as Element)?.classList.add('button_disabled');
        const speed = await getStartEngine(+(e.target as HTMLElement).classList[ID_STORAGE]);
        /* animation[+(ev.target as HTMLElement).classList[ID_STORAGE]] =  */animationCar(((
          e.target as HTMLElement).nextSibling?.nextSibling?.nextSibling?.nextSibling as HTMLElement
        ), (speed.distance / 1000), speed.velocity);
        const drive = await getDriveEngine(+(e.target as HTMLElement).classList[ID_STORAGE]);
        if (drive.status === 500) {
          console.log('error 500 handled');
        /* stopAnimation(animation[(+(ev.target as HTMLElement).classList[ID_STORAGE])].id); */
        }
      }
      drived = false;
    }
  });
  return startHandler;
};
