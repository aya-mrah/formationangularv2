import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeUpdateComponent } from './organisme-update.component';

describe('OrganismeUpdateComponent', () => {
  let component: OrganismeUpdateComponent;
  let fixture: ComponentFixture<OrganismeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
