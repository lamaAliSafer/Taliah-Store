import { Component, OnInit } from '@angular/core';
declare var filtter:any;

@Component({
  selector: 'app-interior-exterior-paints',
  templateUrl: './interior-exterior-paints.component.html',
  styleUrls: ['./interior-exterior-paints.component.css']
})
export class InteriorExteriorPaintsComponent implements OnInit {

  constructor() {  filtter(); }

  ngOnInit(): void {
  }

}
