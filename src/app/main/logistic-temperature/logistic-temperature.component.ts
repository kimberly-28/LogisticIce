import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistic-temperature',
  templateUrl: './logistic-temperature.component.html',
  styleUrls: ['./logistic-temperature.component.scss']
})
export class LogisticTemperatureComponent implements OnInit {

  lat = 23.8519757;
  lng = -103.0177432;
  zoom = 6;

  constructor() { }

  ngOnInit(): void {
  }

}
