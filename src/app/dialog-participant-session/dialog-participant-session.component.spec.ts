import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogParticipantSessionComponent } from './dialog-participant-session.component';

describe('DialogParticipantSessionComponent', () => {
  let component: DialogParticipantSessionComponent;
  let fixture: ComponentFixture<DialogParticipantSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogParticipantSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogParticipantSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
