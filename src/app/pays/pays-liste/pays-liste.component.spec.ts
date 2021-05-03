import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysListeComponent } from './pays-liste.component';

describe('PaysListeComponent', () => {
  let component: PaysListeComponent;
  let fixture: ComponentFixture<PaysListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
