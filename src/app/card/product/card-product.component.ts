import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
