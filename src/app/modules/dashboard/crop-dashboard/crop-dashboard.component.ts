import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-crop-dashboard',
  templateUrl: './crop-dashboard.component.html',
  styleUrls: ['./crop-dashboard.component.less']
})
export class CropDashboardComponent implements OnInit {
  breadcrumds: Array<any> = [{
    url:"dashboard",
    label: "Crop Dashboard"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
