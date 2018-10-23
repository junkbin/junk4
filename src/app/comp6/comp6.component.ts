import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css']
})
export class Comp6Component implements OnInit {

  list: any = [1, 2, 3, 5, 6, 7, 8];
  constructor() { }

  ngOnInit() {
  }

}
