import { createCar } from '../controllers/server';

const brands = ['Lada', 'Mersy', 'Cama', 'Jimny', 'Subaru', 'Jira', 'Huyndai', 'Oka', 'ODA', 'NIVA'];
const models = ['V3', 'X13', 'Mustang', 'RT', 'Class', 'Ogon', '9', 'extra', 'V5', 'Excellent'];
let QUANTITY_GENERATE_CARS = 100;
export const getRandomName = (): string => {
  const firstPart = brands[Math.ceil(Math.random() * 10) - 1];
  const secondPart = models[Math.ceil(Math.random() * 10) - 1];
  return `${firstPart} ${secondPart}`;
};

export const getRandomColor = (): string => {
  const r = Math.floor(Math.random() * (256));
  const g = Math.floor(Math.random() * (256));
  const b = Math.floor(Math.random() * (256));
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

export const getRandomCars = async (): Promise <void> => {
  createCar(
    {
      name: getRandomName(),
      color: getRandomColor(),
    },
  );
};

export const getAllRandomCars = async (): Promise <void> => {
  if (QUANTITY_GENERATE_CARS > 0) {
    createCar(
      {
        name: getRandomName(),
        color: getRandomColor(),
      },
    );
    QUANTITY_GENERATE_CARS -= 1;
    getAllRandomCars();
  } else {
    QUANTITY_GENERATE_CARS = 100;
  }
};
