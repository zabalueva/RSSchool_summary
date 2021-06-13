import { getCountWinners } from '../../controllers/server';

export const getAllCountWinners = async ():Promise <string | null> => {
  const totalCounts = await getCountWinners(1);
  const headerPageWinners = `<div>Winners total ${totalCounts}<div>`;
  document.getElementsByClassName('page__winners')[0].innerHTML = headerPageWinners;
  return totalCounts;
};
