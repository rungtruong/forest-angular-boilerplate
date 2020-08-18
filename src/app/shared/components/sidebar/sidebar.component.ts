import { Component, OnInit } from '@angular/core';
import { MENU } from '../../../core/ultils/systemconst';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  menus: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.menus = MENU;
  }

  logout = () => {
  }
}
