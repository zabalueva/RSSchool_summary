import { BaseComponent } from '../base/base';
import { Route } from '../../models/route';
import './header.scss';
import { About } from '../../pages/about';
import { Settings } from '../../pages/settings';
import { BestScore } from '../../pages/bestScore';

export class Header extends BaseComponent {
  private readonly menuAbout: HTMLAnchorElement;

  private readonly menuSettings: HTMLAnchorElement;

  private readonly menuBestScore: HTMLAnchorElement;

  private readonly bestScore: BestScore;

  private readonly about: About;

  private readonly settings: Settings;

  constructor() {
    super('div', ['header']);
    this.menuAbout = document.createElement('a');
    this.menuSettings = document.createElement('a');
    this.menuBestScore = document.createElement('a');

    this.element.append(this.menuBestScore);
    this.element.append(this.menuAbout);
    this.element.append(this.menuSettings);

    this.menuSettings.innerHTML = '<a href="#/settings">Settings</a>';
    this.menuBestScore.innerHTML = '<a href="#/bestScore">BestScore</a>';
    this.menuAbout.innerHTML = '<a href="/">About</a> ';

    this.about = new About();
    this.settings = new Settings();
    this.bestScore = new BestScore();
  }

  getRoutes() {
    const routes: Route[] = [{
      path: 'bestScore',
      component: this.bestScore,
    },
    {
      path: 'settings',
      component: this.settings,
    },
    {
      path: '/',
      component: this.about,
    },
    ];

    return routes;
  }

  parseLocation = () => window.location.hash.slice(1).toLowerCase() || '/';

  findComponentByPath = (path: string, routes: Route[]) => routes.find(
    (r: Route) => r.path.match(new RegExp(`^\\${path}$`, 'gm')),
  ) || undefined;

  router() {
    const path = this.parseLocation();
    /*  console.log('/'.match(new RegExp(`^\\${path}$`))); */
    console.log(this.findComponentByPath(path, this.getRoutes()));

    const comp = this.findComponentByPath(path, this.getRoutes())?.component || {};
    console.log(comp);
  }
}
