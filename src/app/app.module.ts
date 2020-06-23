import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './services/security/request-interceptor.service';
import { HeaderComponent } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatIconModule } from '@angular/material';
import { PageListeUtilisateurComponent } from './pages/page-liste-utilisateur/page-liste-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageAccueilComponent,
    HeaderComponent,
    PageListeUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
