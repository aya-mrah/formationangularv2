import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineAddComponent } from './domaine-add.component';

describe('DomaineAddComponent', () => {
  let component: DomaineAddComponent;
  let fixture: ComponentFixture<DomaineAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
