import { App } from './app';
import { getAllCars } from './controllers/server';
import { router } from './router/router';
import './style.scss';

window.onload = () => {
  const appRoot = document.getElementById('root');
  const allCars = getAllCars(1);
  if (!appRoot) throw new Error('Root element not found');
  new App(appRoot).navigate();
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
};
