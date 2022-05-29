import { Injectable } from '@angular/core';
import { Observable, of, share } from 'rxjs';
import * as data from '../data/products.json';

export interface IProduct {
  name: string;
  reward: boolean;
  price: number | null;
  left: number | null;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getData() : Observable<IProduct[]> {
    return of(Array.from(data));
  }
}
