import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.scss']
})

export class BackupComponent implements OnInit {
  type: string;
  userLocal: string;
  afterclick: boolean = false;
  payload: any;
  file: string = "";
  tag: string;
  showLoader: boolean = false;
  remarkInvalid: any;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };

  constructor(
    private api: ApiService
  ) {
    this.type = localStorage.getItem('wallet');
    this.userLocal = localStorage.getItem('userLocal');
  }

  ngOnInit(): void {
  }


  async backup() {
    if (this.file !== "") {
        var data = {
          name: this.userLocal,
          folder: this.file,
          tag: this.tag
        }
        try {
          let response: any = await this.api.backup(data);
          this.showLoading(true);
          if (response.status === "success") {
            this.dobackup(response.payload?.id, (data: any) => { })
          } else {
            this.showLoading(false);
            Swal.fire({
              title: response.message,
              icon: 'error',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) { { } }
            });
          }
        }
        catch (e) {
          this.showLoading(false);
          console.log(e);
        }
    }
  }

  async getPath() {
    try {
      let response: any = await this.api.filePick();
      console.log(response);
      if (response.status === "success") {
        this.file = response?.payload?.items_picked[0];
        var name = <HTMLInputElement>document.getElementById('fileInput');
        name.placeholder = response?.payload?.items_picked[0];
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async dobackup(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.showLoading(false);
          this.afterclick = true;
        } else {
          this.showLoading(false);
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
        this.dobackup(taskID, xdata)
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
  getLength() {
    console.log("tag :" + this.tag.length)
    if (this.tag.length > 64) {
      this.remarkInvalid = true
      Swal.fire({
        title: "File Name Tag can not be longer than 64 characters",
        icon: 'info',
        confirmButtonText: 'Okay'
      })
    }
    else {
      this.remarkInvalid = false
    }
  }

}
