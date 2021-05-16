import { title } from './components/header/header';
import { about } from './pages/about';
import { bestScore } from './pages/bestScore';
import { settings } from './pages/settings';
import { App } from './app';
import { Page } from './models/page';
import './style.scss';
import { PlayingField } from './components/playingField/playingField';

window.onload = () => {
  const appRoot = document.getElementById('root');
  console.log(document.getElementById('root'));
  if (!appRoot) throw new Error('Root element not found');
  new App(appRoot).start();
};
