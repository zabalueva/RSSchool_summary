import { GarageModel } from '../models/garageModel';

const SERVER = 'http://localhost:3000';

export const MAX_CARS_ON_PAGE = 7;

export const getAllCars = async (page:number, limit = MAX_CARS_ON_PAGE) => {
  const allCarsServer = await fetch(`${SERVER}/garage?_page=${page}&_limit=${limit}`);
  return allCarsServer.json();
};

export const getTotalCount = async (page:number, limit = MAX_CARS_ON_PAGE) => {
  const allCarsServer = await fetch(`${SERVER}/garage?_page=${page}&_limit=${limit}`);
  const totalCount = allCarsServer.headers.get('X-Total-Count');
  return totalCount;
};

// http://127.0.0.1:3000/engine/?id=1&status=started
export const createCar = async (name:string, color: string, id: number) => {
  const newCar = await fetch(`${SERVER}/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return newCar;
};

export const deleteCar = async (id: number) => {
  const deletedCar = await fetch(`${SERVER}/garage/${id}`, { method: 'DELETE' });
};
