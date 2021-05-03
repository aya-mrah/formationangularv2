import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysUpdateComponent } from './pays-update.component';

describe('PaysUpdateComponent', () => {
  let component: PaysUpdateComponent;
  let fixture: ComponentFixture<PaysUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
