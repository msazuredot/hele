import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcitvityListComponent } from './acitvity-list.component';

describe('AcitvityListComponent', () => {
  let component: AcitvityListComponent;
  let fixture: ComponentFixture<AcitvityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcitvityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcitvityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
