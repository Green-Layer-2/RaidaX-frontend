import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  type: string;
  userLocal: string;
  payload: any;
  healthProg: any;
  goTODash: boolean;
  showLoader: boolean = false;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };

  constructor(
    private api: ApiService,
    public router: Router
  ) {
    this.type = localStorage.getItem('wallet');
    this.userLocal = localStorage.getItem('userLocal');
  }

  ngOnInit(): void {
    if (this.type === 'localwallet') {
      this.checkhealth();
    }
  }

  async checkhealth() {
    try {
      var data = {
        name: this.userLocal
      }
      let response: any = await this.api.health(data);
      if (response.status == "success") {
        this.doCheckHealth(response.payload?.id, (data: any) => { })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doCheckHealth(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      this.healthProg = this.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.goTODash = true;
        } 
        else {
          if (this.payload?.data?.message == "No coins to detect") {
            Swal.fire({
              title: "Fracked coins found. Use the Fix Fracked tool to fix them.",
              icon: 'info',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) {
                {
                  this.router.navigate(['/dashboard/home'])
                }
              }
            });
          } 
          else {
            Swal.fire({
              title: this.payload.data.message,
              icon: 'error',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) {
                {
                  this.router.navigate(['/dashboard/home'])
                }
              }
            });
          }
        }
        return;
      }
      setTimeout(() => {
        this.doCheckHealth(taskID, xdata)
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
