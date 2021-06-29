import { Component, ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import cards, { categories } from 'src/assets/cards';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  listNav = categories;
  link = '/card';

  fillerNav = Array.from({length: 8}, (_, i) => `${this.listNav[i]}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public iconClose = '&times';
  checked = false;
  disabled = false;
  main = true;

  toggleMode() {
    this.checked = !this.checked;
  }

  toggleMenu() {

  }

  highlightSelected(){
  console.log('ghgh')
}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
