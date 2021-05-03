import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeAddComponent } from './organisme-add.component';

describe('OrganismeAddComponent', () => {
  let component: OrganismeAddComponent;
  let fixture: ComponentFixture<OrganismeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
