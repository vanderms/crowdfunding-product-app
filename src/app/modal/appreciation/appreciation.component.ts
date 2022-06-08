import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-modal-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.scss']
})
export class ModalAppreciationComponent implements OnInit {
  
  open: boolean = false;
  scroll: boolean = false;
  
  constructor(
    private activatedRoute: ActivatedRoute,   
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToQueryParams();
    this.subscribeToRouter();
  }
  
  closeModal(): void {
    this.router.navigate(['/']);
  }

  subscribeToQueryParams(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (!this.open && params['modal'] === 'appreciation') {
        this.scroll = true;
      }
      this.open = params['modal'] === 'appreciation';      
    });
  }

  subscribeToRouter(): void {
    this.router.events.subscribe((event) => {
      if (this.scroll && (event instanceof NavigationEnd)) {
        window.scrollTo(0, 0);
        this.scroll = false;
      }     
    });
  }
}
