
import { Produto } from 'src/app/model/produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';
import { Categoria } from 'src/app/model/categoria';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto: Produto = new Produto();
  categoriaId : number;
  categorias: Categoria[];

  categoria : Categoria = new Categoria();


  categoriaForm: FormGroup;

  
  ngOnInit() {
    this.categoriaSelector();
    this.categoriaForm = this.fb.group({
      categoriaControl: ['']
    });
   
  }

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  categoriaSelector() {
    this.categoriaService.getAll().subscribe((out: Categoria[]) => {
      this.categorias = out;
    });
  }


  cadastrar() {
    // alert(JSON.stringify(this.categoriaForm.value))

    this.categoria.id = this.categoriaId;
    this.produto.categoria = this.categoria;
    this.produtoService.insert(this.produto).subscribe((produto: Produto) => {
      this.produto = produto;
      // alert(this.categoria.id)
      alert("Cadastrado com sucesso!");
      this.router.navigate(['/produtos']);
    }, err => {
      console.log(`Erro cod: ${err.status}`);
      alert(`Erro cod: ${err.status}`);
    });
  }
}
