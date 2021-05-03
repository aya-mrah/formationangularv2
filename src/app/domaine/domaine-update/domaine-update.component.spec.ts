import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineUpdateComponent } from './domaine-update.component';

describe('DomaineUpdateComponent', () => {
  let component: DomaineUpdateComponent;
  let fixture: ComponentFixture<DomaineUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
