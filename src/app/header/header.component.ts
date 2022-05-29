import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  bookmark: boolean = false;

  ngOnInit(): void {
  }

  toggleBookmark(): void{
    this.bookmark = !this.bookmark;
  }
}
