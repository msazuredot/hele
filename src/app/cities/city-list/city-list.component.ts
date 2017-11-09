import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { City } from '../city.model';

@Component({
  selector: 'he-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  @Output() cityWasSelected = new EventEmitter<City>();

  cities: City[] = [
    new City('Seattle', 'We will go there soon',
     'http://www.publicdomainpictures.net/pictures/210000/velka/seattle-skyline-14904764209Wo.jpg'),
     new City('Vancouver', 'Big city in Canada. We will take a train there!',
     'https://upload.wikimedia.org/wikipedia/commons/b/ba/Downtown_Vancouver_Sunset.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onCitySelected(city: City) {
    this.cityWasSelected.emit(city);
  }
}
