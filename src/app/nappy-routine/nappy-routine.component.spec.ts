import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NappyRoutineComponent } from './nappy-routine.component';

describe('NappyRoutineComponent', () => {
  let component: NappyRoutineComponent;
  let fixture: ComponentFixture<NappyRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NappyRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NappyRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
