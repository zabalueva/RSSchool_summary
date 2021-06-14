function resetAllCars() {
  const allCars = document.querySelectorAll('.car_img');
  allCars.forEach((item) => {
    (item as HTMLElement).style.transform = 'translateX(0px)';
  });
}

export const getResetButton = async (): Promise<void> => {
  if (!document.querySelector('.button_reset')) {
    const startButton = document.createElement('button');
    (document.getElementById('root') as Element).insertBefore(
      startButton, (document.getElementById('root') as Element).childNodes[0],
    );
    startButton.classList.add('form__button');
    startButton.classList.add('button_reset');
    startButton.innerHTML = 'reset';
    startButton?.addEventListener('click', resetAllCars);
  }
};
