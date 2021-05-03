import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineListeComponent } from './domaine-liste.component';

describe('DomaineListeComponent', () => {
  let component: DomaineListeComponent;
  let fixture: ComponentFixture<DomaineListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
