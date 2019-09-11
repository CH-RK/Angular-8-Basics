import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rkFWork-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isNavbarCollapsed=true;
  constructor() { }

  ngOnInit() {
  }

}
