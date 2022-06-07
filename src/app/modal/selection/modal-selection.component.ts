import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, IProduct } from 'src/app/products.service';

@Component({
  selector: 'app-modal-selection',
  templateUrl: './modal-selection.component.html',
  styleUrls: ['./modal-selection.component.scss']
})
export class ModalSelectionComponent implements OnInit {

  open: boolean = false;
  products: IProduct[] =  [];

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.subscribeToQueryParams();
    this.subscribeToProductsService();
  }

  subscribeToProductsService() {
      this.productsService.getData()
      .subscribe(products => {      
        this.products = [...products];
      });
  }

  subscribeToQueryParams(): void {
    this.route.queryParams.subscribe(params => {
      this.open = params['modal'] === 'open';
    });
  }
}
