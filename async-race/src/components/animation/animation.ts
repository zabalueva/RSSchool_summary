export const animationCar = (id: HTMLElement, distance: number, during: number): { id: number } => {
  let startPoint = 0;
  const state = { id: 0 };

  function move(timestamp: number):void {
    if (!startPoint) {
      startPoint = timestamp;
    }
    const timePass = timestamp - startPoint;
    const passedDistance = Math.round(timePass * (distance / during));

    id.style.transform = `translateX(${Math.min(passedDistance, distance)}px)`;

    if (passedDistance < distance) {
      state.id = window.requestAnimationFrame(move);
    }
  }

  state.id = window.requestAnimationFrame(move);

  return state;
};

export const stopAnimation = (move:number):void => {
  window.cancelAnimationFrame(move);
};
