import { App } from './app';
import { router } from './router/router';
import './style.scss';

window.onload = () => {
  const appRoot = document.getElementById('root');
  if (!appRoot) throw new Error('Root element not found');
  new App(appRoot).navigate();
  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
};
