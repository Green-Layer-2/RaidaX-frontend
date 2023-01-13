import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public showLeftBarOnSm: boolean;
  showHome: boolean = true;
  currentRoute: string;


  constructor(private router: Router, private location: Location) {
    this.showLeftBarOnSm = true;
    this.router.events.subscribe(value => {
      if (this.router.url.toString() == '/dashboard/home') {
        this.showHome = true;
      } else {
        this.showHome = false;
      }
    });
  }

  ngOnInit(): void {
    if (window.innerWidth < 992) {
      this.showLeftBarOnSm = false
    }
  }

  callLeftBar() {
    if (window.innerWidth < 992) {
      this.showLeftBarOnSm = true;
    }
  }
  closeLeftBar() {
    if (window.innerWidth < 992) {
      this.showLeftBarOnSm = false;
    }
  }


}
