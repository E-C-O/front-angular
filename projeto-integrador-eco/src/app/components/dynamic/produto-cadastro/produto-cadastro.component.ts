
import { Produto } from 'src/app/model/produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto/produto.service';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto: Produto = new Produto();

  ngOnInit() {
  }

  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) {
  }


  cadastrar() {
    this.produtoService.insert(this.produto).subscribe((produto: Produto) => {
      this.produto = produto;
      alert("Cadastrado com sucesso!");
      this.router.navigate(['/produtos']);
    }, err => {
      console.log(`Erro cod: ${err.status}`);
      alert(`Erro cod: ${err.status}`);
    });
  }
}
