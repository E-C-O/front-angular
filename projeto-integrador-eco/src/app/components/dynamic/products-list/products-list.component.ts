import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProductsService } from 'src/app/service/products.service';
import { Globals } from 'src/app/model/globals';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/model/cadastro';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ Globals]
})
export class ProductsListComponent implements OnInit {

  constructor(private ProductsService: ProductsService, private router : Router) { }

  products: Produto[];
  cadastro : Cadastro;
  ngOnInit() {
    // if (Globals.CADASTRO == undefined) {
    //   this.router.navigate(['login']);
    // } 
    // else {
    //   this.cadastro = Globals.CADASTRO;
    // }
    this.findAll();
  }

  findAll(){
    this.ProductsService.getAll().subscribe((productsOut: Produto[])=>{
      this.products = productsOut;
    })
  }


}
