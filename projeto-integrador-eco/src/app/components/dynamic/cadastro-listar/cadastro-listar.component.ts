
import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/model/cadastro';
import { CadastroService } from 'src/app/service/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro-listar',
  templateUrl: './cadastro-listar.component.html',
  styleUrls: ['./cadastro-listar.component.css']
})
export class CadastroListarComponent implements OnInit {

  usuarios = [];
  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.cadastroService.getAll().subscribe((cadastro: Cadastro[])=>{
      this.usuarios = cadastro;
    }, err =>{
      console.log(`Erro cod: ${err.status}`);
    });
  }
}
