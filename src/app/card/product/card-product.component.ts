import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() name!: string;
  @Input() price!: number | null;
  @Input() description!: string;
  @Input() left!: number | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {   
    this.router.navigate(['/'], {
      queryParams: {
        modal: 'selection',
        selected: this.name.replace(/\s/g, '-').toLowerCase()
    }})
  }

}
