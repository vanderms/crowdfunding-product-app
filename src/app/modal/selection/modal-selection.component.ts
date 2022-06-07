import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-selection',
  templateUrl: './modal-selection.component.html',
  styleUrls: ['./modal-selection.component.scss']
})
export class ModalSelectionComponent implements OnInit {

  open: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params['modal'] === 'open') {
        this.open = true;
      }
    })
  }

}
