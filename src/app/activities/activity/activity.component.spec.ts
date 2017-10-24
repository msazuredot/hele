import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { activityComponent } from './activity.component';

describe('activityComponent', () => {
  let component: activityComponent;
  let fixture: ComponentFixture<activityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ activityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(activityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
