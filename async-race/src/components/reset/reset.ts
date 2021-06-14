function resetAllCars() {
  const allCars = document.querySelectorAll('.car_img');
  allCars.forEach((item) => {
    (item as HTMLElement).style.transform = 'translateX(0px)';
  });
}

export const getResetButton = async (): Promise<void> => {
  if (!document.querySelector('.button_reset')) {
    const resetButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      resetButton, (document.getElementById('root') as Element).childNodes[0],
    );
    resetButton.classList.add('form__button');
    resetButton.classList.add('button_reset');
    resetButton.innerHTML = 'reset';
    resetButton?.addEventListener('click', resetAllCars);
  }
};
