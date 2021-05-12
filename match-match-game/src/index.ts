import { title } from './components/header/header';
import { about } from './pages/about';
import { best } from './pages/best';
import { settings } from './pages/settings';
import { App } from './app';
import { Page } from './models/page';

/* const content = about.render;
const bestContent = best.render;
const settingsContent = settings.render; */

interface Rout {
  name: string;
  component: Page;
}
const routes: Rout[] = [{
  name: 'best',
  component: best,
},
{
  name: 'setting',
  component: settings,
},
{
  name: '/',
  component: about,
},

];

const parseLocation = () => window.location.hash.slice(1).toLowerCase() || '/';
const findCompByPath = (path: string) => routes.find(
  (r: Rout) => r.name.match(new RegExp(`^\\${path}$`, 'gmi')),
) || undefined;

const router = () => {
  const path = parseLocation();
  console.log('/'.match(new RegExp(`^\\${path}$`)));
  const appRoot = document.getElementById('root');
  if (!appRoot) throw new Error('Root elemen!!!t not found');
  const newApp = new App(appRoot);
  appRoot.innerHTML = 'dkfj';
  document.append(title);

  const component = findCompByPath(path) || {};
  appRoot.innerHTML = component.render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

/* interface SelectProtected {
  readonly wrapperElement: HTMLDivElement;
  readonly inputElement: HTMLInputElement;
}

const selectProtected: SelectProtected = {
  wrapperElement: document.createElement('div'),
  inputElement: document.createElement('input'),
};

const container = document.querySelector('.container');
const defaultRoute = {
  name: 'default',
  component: () => {
    container.innerHTML = 'default';
  },
};

const routing = [{
  name: 'test',
  component: () => {
    container.innerHTML = 'test';
  },
},
{
  name: 'test1',
  component: () => {
    container.innerHTML = 'test1';
  },
},
{
  name: 'test2',
  component: () => {
    container.innerHTML = 'test2';
  },
},

];

window.onpopstate = () => {
  const currentRouteName = window.location.hash.slice(1);
  const currentRoute = routing.find((p) => p.name === currentRouteName);
  //  let defaultRoute = routing.find(p => p.name === 'default');

  (currentRoute || defaultRoute).component();
};

window.onpopstate(); */
/* export enum RoutType {
  ABOUT='ABOUT',
  SETTINGS = 'SETINGS',
} */
