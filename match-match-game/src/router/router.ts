import { About } from '../pages/about';
import { Settings } from '../pages/settings';
import { BestScore } from '../pages/bestScore';

type path = { path: string, component: page };
type page = { render: () => string };

const ErrorComponent = {
  render: () => `
      <section>
        <h1>Error</h1>
        <p>This is just a test</p>
      </section>
    `,
};

const routes = [
  { path: '/', component: new About().getView },
  { path: '/settings', component: new Settings().getView  },
  { path: '/page2', component: new BestScore().getView },
];
const parseLocation = () => window.location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path: string, routes: Array<path>) => routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

export const router = () => {
  const path = parseLocation();
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  document.getElementsByClassName('main')[0].innerHTML = `
  <section>${component.render()}</section>
  `;
};
