import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp8',
  templateUrl: './comp8.component.html',
  styleUrls: ['./comp8.component.css']
})
export class Comp8Component implements OnInit {

  title = 'Tuesday';
  list: string[] = ['1', '2', '3', '4', '5'];
  constructor() { }

  ngOnInit() {
  }

}
