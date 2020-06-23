import { TestBed } from '@angular/core/testing';

import { UtilisateurDaoService } from './utilisateur-dao.service';

describe('UtilisateurDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilisateurDaoService = TestBed.get(UtilisateurDaoService);
    expect(service).toBeTruthy();
  });
});
