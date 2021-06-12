import { Car, CarRequest } from '../models/car';

const SERVER = 'http://localhost:3000';

export const MAX_CARS_ON_PAGE = 7;

export const getAllCars = async (page:number, limit = MAX_CARS_ON_PAGE) => {
  const allCarsServer = await fetch(`${SERVER}/garage?_page=${page}&_limit=${limit}`);
  return allCarsServer.json();
};

export const getTotalCount = async (page:number, limit = MAX_CARS_ON_PAGE): Promise<string|null> => {
  const allCarsServer = await fetch(`${SERVER}/garage?_page=${page}&_limit=${limit}`);
  const totalCount = allCarsServer.headers.get('X-Total-Count');
  return totalCount;
};

// http://127.0.0.1:3000/engine/?id=1&status=started
export const createCar = async (body: CarRequest):Promise<Response> => {
  const newCar = await fetch(`${SERVER}/garage`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return newCar;
};

export const updateCar = async (body: CarRequest, id: number):Promise<Response> => {
  const selectedCar = await fetch(`${SERVER}/garage/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('car');
  return selectedCar;
};

export const deleteCar = async (id: number): Promise<void> => {
  await fetch(`${SERVER}/garage/${id}`, { method: 'DELETE' });
};

export const getAllWinners = async (page:number, limit = MAX_CARS_ON_PAGE) => {
  const allWinners = await fetch(`${SERVER}/winners?_page=${page}&_limit=${limit}`);
  return allWinners.json();
};

export const getCountWinners = async (page:number, limit = MAX_CARS_ON_PAGE) => {
  const allWinners = await fetch(`${SERVER}/winners?_page=${page}&_limit=${limit}`);
  const totalCount = allWinners.headers.get('X-Total-Count');
  return totalCount;
};
