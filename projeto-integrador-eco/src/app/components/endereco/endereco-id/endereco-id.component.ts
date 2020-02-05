import { Usuario } from './../../../model/usuario';
import { Cadastro } from './../../../model/cadastro';
import { Endereco } from './../../../model/endereco';
import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../../../service/endereco/endereco.service';


@Component({
  selector: 'app-endereco-id',
  templateUrl: './endereco-id.component.html',
  styleUrls: ['./endereco-id.component.css']
})
export class EnderecoIdComponent implements OnInit {

  idEndereco: number;

  endereco: Endereco;
  consulta: boolean;

  constructor(private EnderecoService: EnderecoService) { }

  ngOnInit() {
    this.consulta = false;
  }
  searchClick(){
    this.consulta = true;
    this.EnderecoService.getById(this.idEndereco).subscribe((enderecoOut: Endereco) =>{
      this.endereco = enderecoOut;
    })
  }
}






