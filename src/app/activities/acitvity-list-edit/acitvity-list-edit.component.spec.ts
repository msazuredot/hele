import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcitvityListEditComponent } from './acitvity-list-edit.component';

describe('AcitvityListEditComponent', () => {
  let component: AcitvityListEditComponent;
  let fixture: ComponentFixture<AcitvityListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcitvityListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcitvityListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
