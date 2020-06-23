import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { AuthGuardService } from './services/security/auth-guard.service';
import { PageListeUtilisateurComponent } from './pages/page-liste-utilisateur/page-liste-utilisateur.component';


const routes: Routes = [
  {path: "", component: PageAccueilComponent, canActivate:[AuthGuardService]},
  {path: "liste-utilisateur", component: PageListeUtilisateurComponent, canActivate:[AuthGuardService]},
  {path: "login", component: PageLoginComponent},
  {path: "**", component: PageAccueilComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
