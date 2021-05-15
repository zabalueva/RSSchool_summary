import { title } from '../components/header/header';
import { about } from '../pages/about';
import { best } from '../pages/best';
import { settings } from '../pages/settings';
import { App } from '../app';
import { Page } from '../models/page';

/* export Router

interface Rout {
  path: string;
  component: Page;
  render: string;
}

const routesy: Rout[] = [{
  path: '/best',
  component: best,
  render: 'string',
},
{
  path: '/setting',
  component: settings,
  render: 'string',
},
{
  path: '/',
  component: about,
  render: '<a href=`/best`>Best score</a>',
},

];

const parseLocation = () => window.location.hash.slice(1).toLowerCase() || '/';
const findCompByPath = (path: string, routes: Rout[]) => routes.find(
  (r: Rout) => r.path.match(new RegExp(`^\\${path}$`, 'gm')),
) || undefined;

const router = () => {
  const path = parseLocation();
  console.log('/'.match(new RegExp(`^\\${path}$`)));
  console.log(path);
  const appRoot = document.getElementById('root');
  if (!appRoot) throw new Error('Root elemen!!!t not found');
  const newApp = new App(appRoot);
  const component = findCompByPath(path, routesy) || about;
  title.innerHTML = component.render;
  console.log(component.render);
  document.body.appendChild(appRoot);
};

const container = document.querySelector('.container');
const defaultRoute = {
  path: 'default',
  component: () => {
    container.innerHTML = 'default';
  },
};

const routing = [{
  path: 'test',
  component: () => {
    container.innerHTML = 'test';
  },
},
{
  path: 'test1',
  component: () => {
    container.innerHTML = 'test1';
  },
},
{
  path: 'test2',
  component: () => {
    container.innerHTML = 'test2';
  },
},

];

window.onpopstate = () => {
  const currentRoutepath = window.location.hash.slice(1);
  const currentRoute = routing.find((p) => p.path === currentRoutepath);
  let defaultRoute = routing.find(p => p.path === 'default');

  (currentRoute || defaultRoute).component();
};

window.onpopstate();
export enum RoutType {
  ABOUT='ABOUT',
  SETTINGS = 'SETINGS',
}
 */
