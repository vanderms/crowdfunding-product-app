import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'crowdfunding-page-app';

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => console.log(params));
    
  }

}
