import { getTotalCount, MAX_CARS_ON_PAGE } from '../../controllers/server';
import { getCarsImage } from '../carsImage/carsImage';
import { getCount } from '../getCount/getCount';
import { getPageNumber } from '../getPageNumber/getPageNumber';
import { getWinnersList } from '../getWinnersList/getWinnersList';

let currentPage = 1;

export function getNextPage():number {
  currentPage += 1;
  return currentPage;
}

function getPrevPage():number {
  if (currentPage === 1) {
    return 1;
  }
  currentPage -= 1;
  return currentPage;
}

function loadNextPage() {
  if (document.querySelector('.garageView')) {
    if (document.querySelector('.listCar__carTrack')) {
      return getCarsImage(getNextPage());
    }
    if (document.querySelectorAll('.listCar__carTrack').length < MAX_CARS_ON_PAGE) {
      return getCarsImage(currentPage);
    }
    if (!document.querySelector('.listCar__carTrack')) {
      return getCarsImage(currentPage - 1);
    }
  }
  if (!document.querySelector('.garageView')) {
    if (document.querySelector('.winners__pageView')) {
      return getWinnersList(getNextPage());
    }
    if (!document.querySelector('.winners__pageView')) {
      return getWinnersList(currentPage);
    }
  }
  return getCarsImage(getNextPage());
}

function loadPrevPage() {
  if (document.querySelector('.garageView')) {
    return getCarsImage(getPrevPage());
  }
  return getWinnersList(getPrevPage());
}

function incrementPageNumber() {
  if (document.querySelectorAll('.listCar__carTrack').length < MAX_CARS_ON_PAGE) {
    getPageNumber(currentPage - 1);
  }
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
      nextButton, (document.getElementById('root') as Element).childNodes[8],
    );
    nextButton.classList.add('form__button');
    nextButton.classList.add('button_next');
    nextButton.innerHTML = 'next';
    nextButton?.addEventListener('click', loadNextPage);
    nextButton?.addEventListener('click', incrementPageNumber);
  }

  if (!document.querySelector('.button_prev')) {
    const prevButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      prevButton, (document.getElementById('root') as Element).lastChild,
    );
    prevButton.classList.add('form__button');
    prevButton.style.display = 'block';
    prevButton.classList.add('button_prev');
    prevButton.innerHTML = 'prev';
    prevButton?.addEventListener('click', loadPrevPage);
    prevButton?.addEventListener('click', decrementPageNumber);
  }
};
