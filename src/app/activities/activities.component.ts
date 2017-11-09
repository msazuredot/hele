import { Component, OnInit } from '@angular/core';
import { Activity } from './activity/activity.model';

@Component({
  selector: 'he-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  addedActivity: Activity;

  constructor() { }

  ngOnInit() {
  }

  onActivityAdded(newActivity: Activity) {
    this.addedActivity = newActivity;
  }
}
