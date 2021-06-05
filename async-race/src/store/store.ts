import { getAllCars } from '../controllers/server';

export const getCars = async () => {
  const res = await getAllCars(1);
  return res;
};
