import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListeComponent } from './session-liste.component';

describe('SessionListeComponent', () => {
  let component: SessionListeComponent;
  let fixture: ComponentFixture<SessionListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
