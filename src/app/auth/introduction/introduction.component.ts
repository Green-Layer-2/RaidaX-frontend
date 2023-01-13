import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  public themeDarkActive: boolean;
  public themeLightActive: boolean;
  public themeDropdwnToggler: boolean;
  isShow: boolean = false;
  loadingMessage: string;
 
  showContent: boolean = false;
  showLoader: boolean;
  all: any;
  bal: any;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };
  errorOptions: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/error.json'
  };
  payload: any;
  walletName: any;
  localLen: any;
  userLocal: any;

  constructor(
    private eventService: EventService,
    private router: Router,
    private api: ApiService
  ) {
    localStorage.setItem('wallet', 'localwallet')
    this.getAllwallet();
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

  ngOnInit(): void {
    Swal.fire({
      title: "Coin Manager",
      text: "\n Used to authenticate, store and pay out CC. This software is provided as-is with all faults, defects and errors, and without warranty of any kind. This software is provided free of charge by the CC Consortium.",
      icon: 'info',
      confirmButtonText: 'Okay',
    }).then((result) => {
      if (result.value) {
      } else {
        window.close();
      }
    });
    this.initialize();
  }

  async initialize() {
    this.showLoading(true);
    try {
      let response: any = await this.api.init();
      if (response.status == "success") {
        this.showContent = true;
        this.showLoading(false);
        this.isShow = false;
        if (this.localLen > 1 && this.bal > 0) {
          this.showContent = false;
          this.goToDash(this.walletName);
        }
      } else {
        this.showContent = false;
      }
    }
    catch (e) {
      this.initialize();
      this.showContent = false;
    }
  }

  async getAllwallet() {
    try {
      let response: any;
      response = await this.api.getWallet();
      if (response.status === "success") {
        this.all = response.payload;
        this.bal = this.all[0].balance
        sessionStorage.setItem('totalBal', this.bal)
        this.walletName = this.all[0].name
        localStorage.setItem('userLocal', this.walletName)
        this.localLen = this.all.length
        localStorage.setItem('localLength', this.localLen)
      }
    }
    catch (e) {
      console.log(e);
    }
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
    this.themeDropdwnToggler = !this.themeDropdwnToggler;
  }

  closeThemeDropdown() {
    this.themeDropdwnToggler = false;
  }

  showLoading(state): void {
    this.loadingMessage = '';
    if (state) {
      this.showLoader = true;
    } else {
      this.showLoader = false;
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  goToDash(name){
    this.userLocal= name;
    localStorage.setItem('wallet', 'localwallet')
    this.eventService.setItem('userLocal', name, "changelocal")
    this.router.navigate(['/dashboard']);
  }


}
