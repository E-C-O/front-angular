import { Products } from './../model/products';
import { ProductsService } from './../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private ProductsService: ProductsService) { }

  products: Products[];
  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.ProductsService.getAll().subscribe((productsOut: Products[])=>{
      this.products = productsOut;
    })
  }
}
