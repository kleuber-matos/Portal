
import { Component, OnInit } from '@angular/core';
// import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./senado.scss',
              './style.scss',
              './style2015.scss',
              './navbar.component.scss',
             ]
})
export class NavbarComponent implements OnInit {

  isCollapsed = false;
  isMenuCollapsed = true;

  ngOnInit(): void {
  }
  
  constructor() {}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
