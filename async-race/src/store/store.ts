import {
  createCar, getAllCars, getAllWinners, getCountWinners,
} from '../controllers/server';

export const getCars = async () => getAllCars(1);

export const getWinners = async () => getAllWinners(1);
export const getCommonCountWinners = async () => getCountWinners(1);
