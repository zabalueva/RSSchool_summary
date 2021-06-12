import { getTotalCount } from '../../controllers/server';

export const getCount = async ():Promise <string | null> => {
  const totalCounts = await getTotalCount(1);
  const headerPageGarage = `<div>Garage ${totalCounts}<div>`;
  document.getElementsByClassName('page__garage')[0].innerHTML = headerPageGarage;
  return totalCounts;
};
