import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysDetailsComponent } from './pays-details.component';

describe('PaysDetailsComponent', () => {
  let component: PaysDetailsComponent;
  let fixture: ComponentFixture<PaysDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
