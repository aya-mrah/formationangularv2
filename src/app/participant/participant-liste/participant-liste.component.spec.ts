import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantListeComponent } from './participant-liste.component';

describe('ParticipantListeComponent', () => {
  let component: ParticipantListeComponent;
  let fixture: ComponentFixture<ParticipantListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
