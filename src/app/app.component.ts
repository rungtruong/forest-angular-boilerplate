import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';
import { NzIconService } from 'ng-zorro-antd';
import { MAT_ICON } from './core/ultils/material-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document,
    private iconService: NzIconService
  ) {
    this.iconService.addIcon(
      ...MAT_ICON
    );
  }
  ngOnInit(): void {
    const bases = this.document.getElementsByTagName('base');

    if (bases.length > 0) {
      bases[0].setAttribute('href', environment.baseHref);
    }

  }
}
