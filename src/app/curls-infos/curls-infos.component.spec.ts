import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurlsInfosComponent } from './curls-infos.component';

describe('CurlsInfosComponent', () => {
  let component: CurlsInfosComponent
  let fixture: ComponentFixture<CurlsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurlsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurlsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
