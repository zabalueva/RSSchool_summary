import { getTotalCount, MAX_CARS_ON_PAGE } from '../../controllers/server';
import { getCarsImage } from '../carsImage/carsImage';
import { getPageNumber } from '../getPageNumber/getPageNumber';

let currentPage = 1;

export function getNextPage():number {
  currentPage += 1;
  return currentPage;
}

function loadNextPage() {
  return getCarsImage(getNextPage());
}

function getPrevPage():number {
  currentPage -= 1;
  return currentPage;
}

function loadPrevPage() {
  return getCarsImage(getPrevPage());
}

function incrementPageNumber() {
  return getPageNumber(currentPage);
}

function decrementPageNumber() {
  return getPageNumber(currentPage);
}

export const updateCarsImage = ():Promise <Node[]> => getCarsImage(currentPage);

export const pagination = async (): Promise<void> => {
  if (!document.querySelector('.button_next')) {
    const nextButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      nextButton, (document.getElementById('root') as Element).lastChild,
    );
    nextButton.classList.add('form__button');
    nextButton.classList.add('button_next');
    nextButton.innerHTML = 'next';
    nextButton?.addEventListener('click', loadNextPage);
    nextButton?.addEventListener('click', incrementPageNumber);
    if (currentPage > (+getTotalCount / MAX_CARS_ON_PAGE)) {
      nextButton.classList.add('button_disabled');
    }
  }

  if (!document.querySelector('.button_prev')) {
    const prevButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      prevButton, (document.getElementById('root') as Element).lastChild,
    );
    prevButton.classList.add('form__button');
    prevButton.classList.add('button_prev');
    prevButton.innerHTML = 'prev';
    prevButton?.addEventListener('click', loadPrevPage);
    prevButton?.addEventListener('click', decrementPageNumber);
    if (currentPage < 1) {
      prevButton?.removeEventListener('click', decrementPageNumber);
      prevButton.classList.add('button_disabled');
    }
  }
};
