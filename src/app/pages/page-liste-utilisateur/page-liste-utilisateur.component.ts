import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilisateurDaoService } from 'src/app/services/dao/utilisateur-dao.service';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-liste-utilisateur',
  templateUrl: './page-liste-utilisateur.component.html',
  styleUrls: ['./page-liste-utilisateur.component.scss']
})
export class PageListeUtilisateurComponent implements OnInit {

  private souscription: Subscription;
  public listeColonneAffiche: string[] = ['action', 'pseudo'];
  public listeUtilisateur = [];

  constructor(
    private utilisateurDao: UtilisateurDaoService,
    private router: Router
    
    ) { }

  ngOnInit() {

    this.souscription = this.utilisateurDao.listeUtilisateur$.subscribe(
      (listeUtilisateurRetourne: Utilisateur[]) => this.listeUtilisateur = listeUtilisateurRetourne
    );

    this.utilisateurDao.updateListeUtilisateur();
  }


  onEditUtilisateur(utilisateur: Utilisateur){
    this.router.navigate(["utilisateur/" + utilisateur.id]);
  }

}
