import { CategoriaService } from './../../../service/categoria/categoria.service';


import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

  categoriaId : number;
  categoria : Categoria =  new Categoria();
  categorias : Categoria[];
  nomeCategoria : string;

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.listarCategoria();
  }

  remover(){
    this.categoriaService.delete(this.categoria.id).subscribe(()=>{
      this.listarCategoria();
      alert("removido com sucesso");
    },err=>{
      this.listarCategoria();
      alert("erro ao remover");
    });
    this.listarCategoria();
  }

  cadastrar(){
    
    this.categoriaService.insert(this.categoria).subscribe((out : Categoria) =>{
      alert("Cadastrado com sucesso!");
      this.listarCategoria();
    },err =>{
      alert("Erro ao cadastrar");
    })
  }

  listarCategoria(){
    this.categoriaService.getAll().subscribe((out : Categoria[])=>{
      this.categorias = out;
    })
  }

  buscaNome(){
    if(this.nomeCategoria == ""){
      this.listarCategoria();
    }
    else{
      this.categoriaService.getByNome(this.nomeCategoria).subscribe((out : Categoria[])=>{
        this.categorias  = out;
      });
    }
  }

}