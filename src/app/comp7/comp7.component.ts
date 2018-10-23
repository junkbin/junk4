import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp7',
  templateUrl: './comp7.component.html',
  styleUrls: ['./comp7.component.css']
})
export class Comp7Component implements OnInit {

  list: any = [1, 2, 3, 5, 6, 7, 8];
  constructor() { }

  ngOnInit() {
  }

}
