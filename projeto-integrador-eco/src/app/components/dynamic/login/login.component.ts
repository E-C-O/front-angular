import { LoginService } from './../../../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/model/cadastro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  emailInval: boolean = false;
  senhaInval: boolean = false;

  cadastro: Cadastro = new Cadastro(0, "", "", "", "");
  ngOnInit() {
  }

  valid() {
    let email = this.cadastro.email;
    let senha = this.cadastro.senha;

    this.emailInval = false;
    this.senhaInval = false;

    if (email == " " || email == undefined) {
      this.emailInval = true;
    } else {
      this.emailInval = false;
    }

    if (senha == " " || senha == undefined) {
      this.senhaInval = true;
    } else {
      this.senhaInval = false;
    }
  }

  emailIsInval() {
    let email = this.cadastro.email;
    this.emailInval = false;

    if (email == undefined || email == null || email == "") {
      this.emailInval = true;
      return true;
    } else {
      this.emailInval = false;
      return false;
    }
  }
  senhaIsInval() {
    let senha = this.cadastro.senha;

    this.senhaInval = false;

    if (senha == undefined || senha == null || senha == "") {
      this.senhaInval = true;
      return true;
    } else {
      this.senhaInval = false;
      return false;
    }
  }



  login() {

    // this.valid();

    if (this.emailInval || this.senhaIsInval) {
      this.loginService.login(this.cadastro).subscribe(() => {
        alert("Login realizado com sucesso");
      }, err => {
        alert("Email ou senha inválidos.");
      });;
    }
  }


}
