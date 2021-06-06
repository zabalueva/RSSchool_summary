import { GarageModel } from '../models/garageModel';

const SERVER = 'http://localhost:3000';

export const MAX_CARS_ON_PAGE = 10;

export const getAllCars = async(page:number, limit = MAX_CARS_ON_PAGE) => {
  const allCarsServer = await fetch(`${SERVER}/garage?_page=${page}&_limit=${limit}`);
  return await allCarsServer.json();
}

const myInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
};

export const createCar = async(name:string, color: string, id: number) => {
  const newCar = await fetch(`${SERVER}/garage`, myInit);
  console.log(newCar)
}
