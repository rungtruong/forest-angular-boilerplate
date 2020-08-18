import { Component, Inject } from '@angular/core';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  constructor(@Inject(DOCUMENT) private document) {
  }
  ngOnInit(): void {
    let bases = this.document.getElementsByTagName('base');

    if (bases.length > 0) {
      bases[0].setAttribute('href', environment.baseHref);
    }

  }
}
