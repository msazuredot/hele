import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { activityListComponent } from './activity-list.component';

describe('activityListComponent', () => {
  let component: activityListComponent;
  let fixture: ComponentFixture<activityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ activityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(activityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
