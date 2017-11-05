import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity/activity.model';

@Component({
  selector: 'he-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[] = [
    new Activity('Visit Aquarium', 25),
    new Activity('Ride Monorail, twice!', 50),
  ];
  constructor() { }

  ngOnInit() {
  }

}
