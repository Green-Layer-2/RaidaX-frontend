import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styleUrls: ['./fix.component.scss']
})
export class FixComponent implements OnInit {
  public type: string;
  public userLocal: string;
  public payload: any;
  public fixProg: any;
  public goTODash: boolean = false;
  public syncProg: any;
  public showLoader: boolean = false;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };

  constructor(
    private api: ApiService,
  ) {
    this.type = localStorage.getItem('wallet');
    this.userLocal = localStorage.getItem('userLocal');
  }

  ngOnInit(): void {
      this.fixFracked();
  }

  async fixFracked() {
    try {
      var data = {
        name: this.userLocal
      }
      let response: any = await this.api.fix(data);
      if (response.status === "success") {
        this.doCheckFix(response.payload?.id, (data: any) => { })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doCheckFix(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      this.fixProg = this.payload;
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
        this.doCheckFix(taskID, xdata)
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
