import { BaseComponent } from '../base/base';
import { Route } from '../../models/route';
import './header.scss';

export class Header extends BaseComponent {
  private readonly menuAbout: HTMLAnchorElement;

  private readonly menuSettings: HTMLAnchorElement;

  private readonly menuBestScore: HTMLAnchorElement;

  private readonly bestScore: HTMLDivElement;

  private readonly about: HTMLDivElement;

  private readonly settings: HTMLDivElement;

  constructor() {
    super('div', ['header']);
    this.menuAbout = document.createElement('a');

    this.menuSettings = document.createElement('a');

    this.menuSettings.innerHTML = '<div><a href=`/best`>Settings</a> ';
    this.menuBestScore = document.createElement('a');
    this.element.append(this.menuBestScore);
    this.menuBestScore.innerHTML = '<div><a href=`/best`>Best Score</a> ';
    this.element.append(this.menuAbout);
    this.element.append(this.menuSettings);
    this.menuAbout.innerHTML = '<div><a href=`/best`>About</a> ';

    this.bestScore = document.createElement('div');
    this.about = document.createElement('div');
    this.settings = document.createElement('div');
  }

/*

  const routes: Route[] = [{
    name: 'best',
    component: this.bestScore,
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
  const findComponentByPath = (path: string) => routes.find(
    (r: Route) => r.name.match(new RegExp(`^\\${path}$`, 'gmi')),
  ) || undefined;

  const router = () => {
    const path = this.parseLocation();
    console.log('/'.match(new RegExp(`^\\${path}$`)));
    const component = this.findComponentByPath(path) || {};
  };

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router); */
}
