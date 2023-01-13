import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
import { ApiService, DataService } from 'src/app/services/api.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  type: string;
  public themeDarkActive: boolean;
  public themeLightActive: boolean;
  showLoader: boolean = false;
  totalBalance: any = 0;
  userLocal: string;
  all: any;
  payload: any;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };
  data: any;
  walletName: any;

  constructor(private eventService: EventService,
    private onlyonce: DataService,
    private changeDetectorRef: ChangeDetectorRef,
    private api: ApiService,
    private router: Router
  ) {

    this.type = localStorage.getItem('wallet');
    this.userLocal = localStorage.getItem('userLocal');

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
  }

  ngOnInit(): void {
    this.totalBalance = Number(sessionStorage.getItem('totalBal'));
    this.eventService.watchStorage().subscribe((data: string) => {
      if (data === 'upload') {
          this.totalBalance = 0;
          this.userLocal = localStorage.getItem('userLocal');
          this.getAllwallet();
      }
    });
    this.changeDetectorRef.detectChanges();
    this.eventService.changeLocal.subscribe
      (message => {
        if (message[0] != "Empty") {
          if (message.length == 0) {
            this.totalBalance = 0;
            this.getAllwallet();
          } else {
            this.all = message;
          }
        } else {
          this.all = [];
        }
      });
  
  }

  async getAllwallet() {
    try {
      let response: any;
      response = await this.api.getWallet();
      if (response.status == "success") {
        this.all = response.payload;
        this.walletName = this.all[0].name
        if (this.all?.length == 0) {
          this.eventService.changeLocaldata(["Empty"]);
        } else {
          this.eventService.changeLocaldata(this.all);
        }
        localStorage.setItem('localLength', this.all?.length);
        for (let i = 0; i < this.all.length; i++) {
          this.totalBalance = this.totalBalance + Number(this.all[i]?.balance);
        }
        sessionStorage.setItem('totalBal', this.totalBalance);
        let data = this.onlyonce.getData();
        if (data != 'leftover') {
          this.all.forEach(item => {
            this.leftover(item.name);
          });
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  async leftover(name: string) {
    try {
      let response: any = await this.api.leftover(name);
      if (response.status === "success") {
        if (response?.payload?.balance > 0) {
          Swal.fire({
            title: "Looks like the last import did not finish. Continue importing leftover coins",
            icon: 'info',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) {
              {
                this.suspect(name);
              }
            }
          });
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async suspect(name: string) {
    try {
      var data = {
        name: name,
        tag: "leftover coin",
        items: [{ type: "suspect" }]
      }
      let response: any = await this.api.suspect(data);

      if (response.status === "success") {
        this.showLoader = true;
        this.doImport(response.payload?.id, (data: any) => {
        });
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doImport(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.showLoader = false;
          this.eventService.setItem("wallet", "localwallet", 'upload');
        } else {
          this.showLoader = false;
          Swal.fire({
            title: "Failure! could not proceed with the transaction. " + this.payload?.data?.message,
            icon: 'error',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        return;
      }
      setTimeout(() => {
        this.doImport(taskID, xdata)
      }, 500)

    }
    else {
      this.showLoader = false;
    }
  }


  getWalletDetail(name) {
    this.userLocal = name;
    localStorage.setItem('wallet', 'localwallet')
    this.eventService.setItem('userLocal', name, "changelocal")
    this.router.navigate(["/dashboard/home"]);
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


}
