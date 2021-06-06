import { GarageModel } from '../models/garageModel';

const SERVER = 'http://localhost:3000';

const MAX_CARS_ON_PAGE = 10;

export const getAllCars = async function(page:number, limit = MAX_CARS_ON_PAGE) {
  const allCarsServer = await fetch(`${SERVER}/garage?_page=${page}&_limit=${limit}`);
  return await allCarsServer.json();
}
