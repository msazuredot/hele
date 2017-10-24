import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { activityListEditComponent } from './activity-list-edit.component';

describe('activityListEditComponent', () => {
  let component: activityListEditComponent;
  let fixture: ComponentFixture<activityListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ activityListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(activityListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
