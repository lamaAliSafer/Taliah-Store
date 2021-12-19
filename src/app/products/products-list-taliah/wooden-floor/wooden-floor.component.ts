import { Component, OnInit } from '@angular/core';
declare var filtter:any;

@Component({
  selector: 'app-wooden-floor',
  templateUrl: './wooden-floor.component.html',
  styleUrls: ['./wooden-floor.component.css']
})
export class WoodenFloorComponent implements OnInit {

  constructor() {  filtter(); }

  ngOnInit(): void {
  }

}
