import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ProductsService, IProduct } from 'src/app/products.service';

@Component({
  selector: 'app-modal-selection',
  templateUrl: './modal-selection.component.html',
  styleUrls: ['./modal-selection.component.scss']
})
export class ModalSelectionComponent implements OnInit {

  open: boolean = false;
  products: IProduct[] = [];
  private scroll: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryParams();
    this.subscribeToProductsService();
    this.subscribeToRouter();    
  }

  subscribeToProductsService() {
      this.productsService.getData()
      .subscribe(products => {      
        this.products = [...products];
      });
  }

  closeModal(): void {
    this.router.navigate(['/']);
  }

  subscribeToQueryParams(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (!this.open && params['modal'] === 'selection') {
        this.scroll = true;
      }
      this.open = params['modal'] === 'selection';      
    });
  }

  subscribeToRouter(): void {
    this.router.events.subscribe((event) => {
      if (this.scroll && (event instanceof NavigationEnd)) {
        window.scrollTo(0, 0);
      }     
    });
  }
}
