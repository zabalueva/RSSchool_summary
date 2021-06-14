import { deleteCar } from '../../controllers/server';
import { updateCarsImage } from '../pagination/pagination';

const ID_STORAGE = 1;

export const getDeleteButtons = async (): Promise<void> => {
  const deleteHandler = document.addEventListener('click', async (e) => {
    if ((e.target as Element)?.classList.contains('button_delete')) {
      await deleteCar(Number(((e.target as Element).nextElementSibling?.classList[ID_STORAGE])));
    }
  });
  return deleteHandler;
};
