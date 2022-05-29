import { Component, OnInit, HostListener } from '@angular/core';


enum BtnPath {
  hamburger = '/assets/icon-hamburger.svg',
  close = '/assets/icon-close-menu.svg'
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public hasScrolled: boolean =  false;
  public isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getCurrentBtn() {
    return this.isOpen ? BtnPath.close : BtnPath.hamburger;
  }

  @HostListener('window:scroll', [])
  onScroll() : void {
    this.hasScrolled = window.scrollY > 32 ? true : false;
  }

  toggleSidebar(): void {
    this.isOpen ? this.closeSidebar() : this.openSidebar();
  }

  openSidebar(): void {
    this.isOpen = true;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }  
}
