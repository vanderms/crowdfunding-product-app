import { Component, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';


@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {

  rewardedProducts: IProduct[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getRewardedProducts();
  }

  getRewardedProducts(): void{
    this.productsService.getData()
      .subscribe(products => {      
        this.rewardedProducts = products.filter(product => product.reward)
      });
  }
}
