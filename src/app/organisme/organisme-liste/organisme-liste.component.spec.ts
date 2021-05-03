import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismeListeComponent } from './organisme-liste.component';

describe('OrganismeListeComponent', () => {
  let component: OrganismeListeComponent;
  let fixture: ComponentFixture<OrganismeListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganismeListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
