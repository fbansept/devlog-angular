import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilisateurDaoService } from '../dao/utilisateur-dao.service';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public readonly utilisateurConnecte$: BehaviorSubject<Utilisateur>;

  constructor(private http: HttpClient, private utilisateurDao: UtilisateurDaoService) { 

    this.utilisateurConnecte$ = new BehaviorSubject(null);

    const token: string = localStorage.getItem("token");

    if(token != null) {

      const payload = JSON.parse(atob(token.split('.')[1]));

      this.utilisateurDao.getUtilisateur(payload.sub).subscribe(
        (utilisateur: Utilisateur) => {
          this.utilisateurConnecte$.next(utilisateur);
        }
      )
    }
  }

  public login (pseudo: string, password: string): Observable<Utilisateur> {

    return new Observable<Utilisateur>((observer) => {

        this.http.post(
          environment.urlServer + "authentification", //url
          {pseudo, password},                         //body
          {responseType: 'text'}                      //response header
        )
        .subscribe((token: string) => {

            localStorage.setItem("token",token);
            const payload = JSON.parse(atob(token.split('.')[1]));
            
            this.utilisateurDao.getUtilisateur(payload.sub).subscribe(
              (utilisateur: Utilisateur) => {
                this.utilisateurConnecte$.next(utilisateur);
                observer.next(utilisateur);
              }
            )
        });
    });
  }

  public isLoggedIn(): boolean {
    //TODO vérifier la date d'expiration
    const token: string = localStorage.getItem("token");
    return token !== null;
  }
}
