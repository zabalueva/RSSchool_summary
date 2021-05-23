import { About } from '../pages/about';
import { Settings } from '../pages/settings';
import { BestScore } from '../pages/bestScore';
import { Page } from '../models/page';

type Path = { path: string, component: Page };

const BestScoreLayout = {
  render: () => `
      <section>
        <p>Top 10 players</p>
      </section>
    `,
};

const routes = [
  { path: '/', component: new About().getView },
  { path: '/about', component: new About().getView },
  { path: '/settings', component: new Settings().getView },
  { path: '/bestScore', component: new BestScore().getView },
];
const parseLocation = () => window.location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (
  path: string, routesLine: Array<Path>,
) => routesLine
  .find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const router = () => {
  const path = parseLocation();
  const { component = BestScoreLayout } = findComponentByPath(path, routes) || {};
  document.getElementsByClassName('main')[0].innerHTML = `
  <section>${component.render()}</section>
  `;
  const menuItems = document.getElementsByClassName('menu__item');
  Array.from(menuItems)
    .forEach((el) => el.classList.remove('menu__item_active'));
  Array.from(menuItems)
    .find((el) => el.innerHTML.toLowerCase() === path.slice(1).toLowerCase())
    ?.classList.add('menu__item_active');
};
