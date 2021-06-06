import { deleteCar } from '../../controllers/server'

export const selectCar = () => {
  (document.querySelector('.selectCar') as HTMLButtonElement).addEventListener('click', (e) => {console.log(e.target)}
  )
  console.log('dksjf')
  return (document.querySelector('.selectCar') as HTMLButtonElement).closest;
}

export const deleteSelectCar = async() => await deleteCar(2);