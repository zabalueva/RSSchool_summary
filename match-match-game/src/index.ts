import { title } from './components/header/header';
import { about } from './pages/about';
import { best } from './pages/best';
import { settings } from './pages/settings';
import { App } from './app';
import { Page } from './models/page';
import './style.scss';
import { PlayingField } from './components/playingField/playingField';
/* import { Router } from './router/router'; */

/* const content = about;
const bestContent = best.render;
const settingsContent = settings.render; */

/* window.addEventListener('hashchange', router);
window.addEventListener('load', router); */

/* interface SelectProtected {
  readonly wrapperElement: HTMLDivElement;
  readonly inputElement: HTMLInputElement;
}

const selectProtected: SelectProtected = {
  wrapperElement: document.createElement('div'),
  inputElement: document.createElement('input'),
}; */

window.onload = () => {
  const appRoot = document.getElementById('root');
  console.log(document.getElementById('root'));
  if (!appRoot) throw new Error('Root element not found');
  new App(appRoot).start();
};
/*

const newApp = new App(appRoot); */
/* const component = findCompByPath(path, routesy) || about; */

/* document.body.appendChild(title);
document.body.appendChild(about); */
/* document.body.appendChild(PlayingField); */
