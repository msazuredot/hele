import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcitvityComponent } from './acitvity.component';

describe('AcitvityComponent', () => {
  let component: AcitvityComponent;
  let fixture: ComponentFixture<AcitvityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcitvityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcitvityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
