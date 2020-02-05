import { Endereco } from './../../../model/endereco';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnderecoService } from 'src/app/service/endereco/endereco.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-endereco-cadastro',
  templateUrl: './endereco-cadastro.component.html',
  styleUrls: ['./endereco-cadastro.component.css']
})
export class EnderecoCadastroComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  usuarioId: number;
  endereco: Endereco = new Endereco();

  constructor(private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  cadastrar() {
    //this.usuario.idUsuario = this.usuarioId;
    //
    this.endereco.usuario = this.usuario;
    this.enderecoService.insert(this.endereco).subscribe((endereco: Endereco) => {
      this.endereco = endereco;
      alert("Endereço cadastrado com sucesso!");
      this.router.navigate(['/enderecos']);
    }, err => {
      console.log(`Erro cod: ${err.status}`);
      alert(`Erro cod: ${err.status}`);
    });
  }
}
