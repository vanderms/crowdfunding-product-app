import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.scss']
})
export class CardSelectionComponent implements OnInit {

  @Input() name: string = '';
  @Input() price: number | null = null;
  @Input() description: string = '';  
  @Input() left: number | null = null;
  selected: boolean = false;
  private kebabName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.setKebabName();
    this.setSelected();
  }

  setSelected() : void {
    this.activatedRoute.queryParams.subscribe(params => {   
      this.selected = params['selected'] === this.kebabName;      
    })
  }

  setKebabName() {
    this.kebabName = this.name.replace(/\s/g, '-').toLowerCase();
  }

  onRadioChange(event: Event): void {
    if ((event.currentTarget as HTMLInputElement).checked) {
      this.router.navigate(['/'], {
        queryParams: {
          modal: 'open',
          selected: this.kebabName
      }})  
    }
  }

  getInputId(): string{
    return 'modal-card' + this.kebabName;
  }

  getRadioButtonId(): string {
    return 'modal-card-radio-btn-' + this.kebabName;
  }
}
