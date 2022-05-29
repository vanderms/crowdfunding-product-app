import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as data from '../data/crowdfunding.json';


export interface ICrowdfundingData {
  backed: number;
  backers: number;
  daysLeft: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class CrowdfundingService {

  constructor() { }

  getData(): Observable<ICrowdfundingData> {    
    return of(data);
  }
}
