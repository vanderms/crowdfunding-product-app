import { Component, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '../../products.service';


@Component({
  selector: 'app-section-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
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
