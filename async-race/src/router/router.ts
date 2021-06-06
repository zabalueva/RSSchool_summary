import { Garage } from '../view/garage';
import { Winners } from '../view/winners';
import { Route } from '../models/route';

const routes = [
  { path: '/', component: new Garage().getView },
  { path: '/winners', component: new Winners().getView },
];
const parseLocation = () => window.location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (
  path: string, routesLine: Array<Route>,
) => routesLine
  .find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const router = ():void => {
  document.querySelector('registration__wrap')?.classList.add('registration__wrap_hidden');
  const path = parseLocation();
  const { component = new Garage().getView } = findComponentByPath(path, routes) || {};
  document.getElementsByClassName('main')[0].innerHTML = `
  <section>${component.render()}</section>
  `;
};