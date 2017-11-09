import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Activity } from '../activity/activity.model';

@Component({
  selector: 'he-activity-list-edit',
  templateUrl: './activity-list-edit.component.html',
  styleUrls: ['./activity-list-edit.component.scss']
})
export class ActivityListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() activityAdded = new EventEmitter<Activity>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const actName = this.nameInputRef.nativeElement.value;
    const actCost = this.amountInputRef.nativeElement.value;
    const newActivity = new Activity(actName, actCost);
    this.activityAdded.emit(newActivity);
  }
}
