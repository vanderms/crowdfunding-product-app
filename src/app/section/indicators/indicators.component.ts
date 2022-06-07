import { Component, OnInit } from '@angular/core';
import { CrowdfundingService, ICrowdfundingData } from '../../crowdfunding.service';

@Component({
  selector: 'app-section-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {

  indicators: ICrowdfundingData | null = null;

  constructor(private crowdfundingService: CrowdfundingService) { }

  ngOnInit(): void {
    this.getIndicators();
  }

  getIndicators() {
    this.crowdfundingService.getData()
      .subscribe(indicators => this.indicators = indicators);
  }

  calcProgressWidth(): string {
    if (this.indicators) {
      const percentage = (this.indicators.backed * 100) / this.indicators.total;
      return percentage + '%';
    }
    return '0%';
  }

  formatNumberWithCommas(x: number | undefined ): string {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return '';    
  }
}
