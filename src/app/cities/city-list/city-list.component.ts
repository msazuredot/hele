import { Component, OnInit } from '@angular/core';
import { City } from '../city.model';

@Component({
  selector: 'he-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  cities: City[] = [
    new City('Seattle', 'We will go there soon',
     'http://www.publicdomainpictures.net/pictures/210000/velka/seattle-skyline-14904764209Wo.jpg'),
     new City('Vancouver', 'Big city in Canada. We will take a train there!',
     'https://cdn.pixabay.com/photo/2017/08/09/09/52/vancouver-2613994_960_720.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
