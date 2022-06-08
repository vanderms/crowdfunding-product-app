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
  pledge: number = 0;
  error: boolean = false;  
  private kebabName: string = '';


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.setKebabName();
    this.setSelected();
    this.pledge = typeof this.price === 'number' ? this.price : 0;
  }

  setSelected() : void {
    this.activatedRoute.queryParams.subscribe(params => {   
      this.selected = params['selected'] === this.kebabName;      
    })
  }

  setKebabName() {
    this.kebabName = this.name.replace(/\s/g, '-').toLowerCase();
  }

  onSelect(): void {
    if (this.left !== 0) {
      this.router.navigate(['/'], {
        queryParams: {
          modal: 'selection',
          selected: this.kebabName
        }}
      )
    }  
  }

  onSubmit(): void {
    if (this.pledge < (this.price ? this.price : 0)) {
      this.error = true;
    }
    else {
      this.error = false;
    }
  }

  getInputId(): string{
    return 'modal-card' + this.kebabName;
  }

  getRadioButtonId(): string {
    return 'modal-card-radio-btn-' + this.kebabName;
  }
}
