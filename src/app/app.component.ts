import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cloud-wallet';
  public themeTogChanger: boolean;
  public themeDarkActive: boolean;
  public themeLightActive: boolean;
  public themeDropdwnToggler: boolean;
  showToolDropdown: boolean;


  constructor(private eventService: EventService,
    private router: Router) {
    if (localStorage.getItem('themeLightActive') == '1') {
      this.themeTogChanger = false;
    } else if (localStorage.getItem('themeLightActive') == '0') {
      this.themeTogChanger = true;
    } else {
      this.themeTogChanger = false;
    };

    if (localStorage.getItem('themeLightActive') == '1') {
      this.themeLightActive = true;
      this.themeDarkActive = false;
    } else if (localStorage.getItem('themeLightActive') == '0') {
      this.themeLightActive = false;
      this.themeDarkActive = true;
    } else {
      this.themeLightActive = true;
      this.themeDarkActive = false;
    }
    this.themeDropdwnToggler = false;
  }

  ngOnInit() {
    this.eventService.getThemeTogEvent().subscribe(() => {
      if (localStorage.getItem('themeLightActive') == '1') {
        this.themeTogChanger = false;
      } else if (localStorage.getItem('themeLightActive') == '0') {
        this.themeTogChanger = true;
      } else {
        this.themeTogChanger = !this.themeTogChanger;
      }
    });

  }

  themeDarkCaller() {
    if (this.themeDarkActive == false) {
      this.themeDarkActive = true;
      this.themeLightActive = false;
      localStorage.setItem('themeLightActive', '0');
      this.eventService.emitThemeTogEvent();
    }
    this.themeDropdwnToggler = false;
  }
  themeLightCaller() {
    if (this.themeLightActive == false) {
      this.themeLightActive = true;
      this.themeDarkActive = false;
      localStorage.setItem('themeLightActive', '1');
      this.eventService.emitThemeTogEvent();
    }
    this.themeDropdwnToggler = false;
  }

  themeDropDownCaller() {
    if (this.themeLightActive) {
      this.themeDarkCaller();

    }
    else if (this.themeDarkActive) {
      this.themeLightCaller();
    }
  }

  closeThemeDropdown() {
    this.themeDropdwnToggler = false;
  }
  toggleTools() {
    this.showToolDropdown = !this.showToolDropdown;
  }
  closeTools() {
    this.showToolDropdown = false;
  }
  getCorrectRoute() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
  }
}
