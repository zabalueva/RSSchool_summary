import { startEngine, driveEngine } from '../../controllers/server';

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
  document.addEventListener('click', (e) => {
    if ((e.target as Element)?.classList.contains('button_stop')) {
      ((e.target as HTMLElement).nextSibling?.nextSibling as HTMLElement).style.transform = 'translateX(0px)';
      ((e.target as HTMLElement)?.previousSibling?.previousSibling as HTMLElement)?.classList.remove('button_disabled');
    }
  });
};
