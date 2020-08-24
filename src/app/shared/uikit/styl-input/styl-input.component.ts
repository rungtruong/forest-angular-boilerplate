import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styl-input',
  templateUrl: './styl-input.component.html',
  styleUrls: ['./styl-input.component.less']
})
export class StylInputComponent implements OnInit {
  passwordVisible = false;
  password?: string = "";


  value: string[] = [];
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }
  onChange($event: string[]): void {
    console.log($event);
  }
}
