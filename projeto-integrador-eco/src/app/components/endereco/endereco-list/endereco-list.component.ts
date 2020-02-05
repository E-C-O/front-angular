import { EnderecoService } from './../../../service/endereco/endereco.service';
import { Endereco } from './../../../model/endereco';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/model/globals';
import { Cadastro } from 'src/app/model/cadastro';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
  styleUrls: ['./endereco-list.component.css'],
  providers: [ Globals]
})

export class EnderecoListComponent implements OnInit {

  constructor(private enderecoService: EnderecoService, private router : Router) { }

  endereco: Endereco[];
  cadastro : Cadastro;

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.enderecoService.getAll().subscribe((enderecoOut: Endereco[])=>{
      this.endereco = enderecoOut;
    })
  }
}

