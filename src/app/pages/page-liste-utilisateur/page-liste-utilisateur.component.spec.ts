import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeUtilisateurComponent } from './page-liste-utilisateur.component';

describe('PageListeUtilisateurComponent', () => {
  let component: PageListeUtilisateurComponent;
  let fixture: ComponentFixture<PageListeUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListeUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListeUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
