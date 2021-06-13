import {
  getAllCars, getAllWinners, getCountWinners,
} from '../controllers/server';

export const getCars = async ():Promise<Response> => getAllCars(1);

export const getWinners = async () => getAllWinners(1);
export const getCommonCountWinners = async ():Promise<string | null> => getCountWinners(1);

export const animation = {};
