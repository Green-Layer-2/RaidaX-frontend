import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-fix-limbo',
  templateUrl: './fix-limbo.component.html',
  styleUrls: ['./fix-limbo.component.scss']
})
export class FixLimboComponent implements OnInit {
  public type: string;
  public userSky: string;
  public userLocal: string;
  public payload: any;
  public fixLim: any;
  public goTODash: boolean = false;
  public showLoader: boolean = false;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };

  constructor(
    private api: ApiService,
    public router: Router
  ) {
    this.type = localStorage.getItem('wallet');
    this.userSky = localStorage.getItem('userSky');
    this.userLocal = localStorage.getItem('userLocal');
  }

  ngOnInit(): void {
    this.fixLimbo();
  }
  async fixLimbo() {
    try {
      var data = {
        name: this.userLocal
      }
      let response: any = await this.api.fixlimbo(data);
      if (response.status === "success") {
        this.doCheckFixLimbo(response.payload?.id, (data: any) => { })
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  async doCheckFixLimbo(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      this.fixLim = this.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.goTODash = true;
        } else {
          this.goTODash = true;
          Swal.fire({
            title: this.payload.data.message,
            icon: 'error',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        return;
      }
      setTimeout(() => {
        this.doCheckFixLimbo(taskID, xdata)
      }, 500)
    }
  }

  showLoading(state): void {
    if (state) {
      this.showLoader = true;
    } else {
      this.showLoader = false;
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
