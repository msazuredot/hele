import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { City } from '../city.model';

@Component({
  selector: 'he-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city: City;
  @Output() citySelected = new EventEmitter<void>();
  constructor() { }

  onSelected() {
    this.citySelected.emit();
  }

  ngOnInit() {
  }

}
