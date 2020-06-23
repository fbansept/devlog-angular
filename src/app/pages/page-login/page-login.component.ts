import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/security/authentification.service';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private auth: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        pseudo: ['',Validators.required],
        password: ['',Validators.required]
      }
    )
  }

  public onSubmit(): void {

    //si le formulaire est invalide, il n'ira pas plus loin
    if(this.loginForm.invalid) {
      return;
    }

    this.auth.login(
      this.loginForm.controls.pseudo.value, 
      this.loginForm.controls.password.value
    )
    .subscribe((utilisateur: Utilisateur) => {
      this.router.navigate(['/']);
    })
  }
}
