import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/security/auth-guard.service';
import { AuthentificationService } from 'src/app/services/security/authentification.service';
import { Utilisateur } from 'src/app/model/Utilisateur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public utilisateurConnecte: Utilisateur;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.auth.utilisateurConnecte$.subscribe(u => {
      console.log(u)
      this.utilisateurConnecte = u;
    });
  }

  public isAdmin() : boolean {
    if(this.utilisateurConnecte != null) {
      return this.utilisateurConnecte.listeRole.find(r => r.nom == 'ROLE_ADMIN') != undefined;
    }
  }
}
