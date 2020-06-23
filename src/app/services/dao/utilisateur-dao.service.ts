import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from 'src/app/model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurDaoService {

  public readonly listeUtilisateur$: BehaviorSubject<Utilisateur[]>;

  constructor(private http: HttpClient) {
    this.listeUtilisateur$ = new BehaviorSubject([]);
  }

  public getUtilisateur(pseudo: string): Observable<Utilisateur> {

    return this.http.get<Utilisateur>(environment.urlServer + "user/utilisateur-by-pseudo/" + pseudo);

  }

  public updateListeUtilisateur() : void {

    this.http
              .get(environment.urlServer + "user/utilisateurs")
              .subscribe(
                (valeurRetourne: Utilisateur[]) => {
                  this.listeUtilisateur$.next(valeurRetourne);
                }
              );

  }
}
