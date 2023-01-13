import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  userLocal: string;
  successInfo: boolean;
  receiptdetails: any;
  errorInfo: boolean;
  payload: any;
  taskId: any;
  successMsg: string;
  errorMsg: string;
  loadingMessage: string;
  showLoader: boolean;
  dateTime: any;
  afterClick: boolean = false;
  showreceipt: boolean = false;
  file: any = [];
  baseAdd: any = [];
  btn: boolean = true;
  transaction: any = [];
  files: any[] = [];
  base: any = [];
  type: string;
  tag: any;
  frackedDetail: any;
  isFracked: boolean;
  totalimport: any;
  counterfeitCoin: any;
  delButton: boolean = false;
  fileData: any;
  coinsInfo: any = '';
  email: string;
  remarkInvalid: boolean

  
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;

  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };
  errorOptions: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/error.json'
  };

  constructor(
    private api: ApiService,
    private router: Router,
    private storage: EventService
  ) { }

  ngOnInit(): void {
    this.userLocal = localStorage.getItem('userLocal');
    this.type = localStorage.getItem('wallet');
  }

  async getTransaction() {
    var data = localStorage.getItem('userLocal');
    try {
      let response: any = await this.api.getTransaction(data);
      this.transaction = response;
    }
    catch (e) {
      console.log(e);
      this.errorInfo = true;
      this.errorMsg = "Failed";
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  showLoading(state): void {
    this.loadingMessage = '';
    if (state) {
      this.showLoader = true;
    } else {
      this.showLoader = false;
    }
  }
  async doCheck(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    if (task) {
      this.payload = task.payload;
      this.totalimport = this.payload.data?.pown_results?.total;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.afterClick = true;
          this.dateTime = new Date();
          this.storage.setItem("wallet", "localwallet", 'upload');
          if (this.payload?.data?.pown_results?.fracked != 0) {
            let data = {
              name: this.userLocal,
              pown_items: [{
                sn: this.payload.data.pown_results?.coins[0].sn,
                pownstring: this.payload.data?.pown_results?.coins[0].pownstring
              }],
              tickets: [this.payload.data?.pown_results?.tickets[0]]
            }
            this.fixfracked(data);
          }
        } else {
          this.afterClick = false;
          this.btn = true;
          this.successInfo = false;
          this.errorInfo = false;
          this.baseAdd = [];
          this.files = [];
          this.base = [];
          Swal.fire({
            title: 'The coins you attempted to import are not CloudCoins and not supported by this program. Please upgrade to a newer version',
            icon: 'error',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        this.successInfo = false;
        this.errorInfo = false;
        return;
      }
      this.successInfo = true;
      this.successMsg = "Doing.... Task ID " + taskID + ", Progress " + this.payload.progress + "%";
      setTimeout(() => {
        this.doCheck(taskID, xdata)
      }, 500)

    }
    else {
      this.errorInfo = true;
      this.successInfo = false;
      this.errorMsg = "Call Failed";
      this.btn = true;
    }
  }

  
  async getPath() {
    try {
      let response: any = await this.api.importFile();
      if (response.status == "success") {
        this.files = response?.payload?.items_picked;
        this.btn = false;
        for (let i = 0; i < this.files.length; i++) {
          var last = this.files[i].substring(this.files[i].lastIndexOf(".") + 1, this.files[i].length);
          switch (last) {
            case 'stack': {
              this.coinsInfo = 'old';
              Swal.fire({
                title: ' You are attempting to load Legacy CloudCoins into Coin Manager. These coins will be upgraded at the rate of 1 new CC for every 85.125 Legacy CC. Your share of the CC pie will remain the same but you will have fewer slices that are each 85.125 times larger. A maximum of 300K Legacy coins can be converted at one time. Do you wish to continue?',
                icon: 'info',
                confirmButtonText: 'Okay',
                showCancelButton: true,
                showConfirmButton: true,
                cancelButtonText: 'Cancel'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  const { value: email } = await Swal.fire({
                    title: 'Enter email address',
                    input: 'email',
                    inputLabel: 'Email',
                    inputPlaceholder: 'Email address'
                  })
                  this.email = email;
                  console.log("email is:" + this.email)
                } else {
                  this.router.navigate(['/dashboard/home'])
                }
              })

              break;
            }
            case 'png': {
              this.coinsInfo = 'new';
              break;
            }
            case 'bin': {
              this.coinsInfo = 'new';
              break;
            }
            default: {
              Swal.fire({
                title: "Please select files with bin or png extension.",
                icon: 'error',
                confirmButtonText: 'Okay',
              }).then((result) => {
                if (result.value) { { } }
              });
              break;
            }
          }
          console.log("number of files:" + this.files.length);
          if (this.files.length > 24000) {

            this.files = []
            Swal.fire({
              title: 'Too many files selected. Maximum number of files that can be selected per import is 24000',
              icon: 'error',
              confirmButtonText: 'Okay',


            })
          }
        }
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  keyPressAlphaNumericWithCharacters(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9-_ ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  getLength() {
    console.log("tag :" + this.tag.length)
    if (this.tag.length > 64) {
      this.remarkInvalid = true
      Swal.fire({
        title: "Remarks only allows for 64 character memo",
        icon: 'info',
        confirmButtonText: 'Okay'
      })
    }
    else {
      this.remarkInvalid = false
    }
  }
  async next() {
    this.delButton = true;

    if (this.coinsInfo == 'new') {
      try {
        for (let i = 0; i < this.files?.length; i++) {
          this.base.push({ 'type': 'file', 'data': this.files[i] })
        }
        var data = {
          name: this.userLocal,
          tag: this.tag,
          items: this.base
        }
        let response: any = await this.api.import(data);
        if (response.status === "success") {
          this.btn = true;
          this.doCheck(response.payload?.id, (data: any) => {
            this.successInfo = true;
            this.successMsg = "Done " + JSON.stringify(data)
          });
        } else {
          if (response.payload.message == "Validation error. tag: must be in a valid format.") {
            Swal.fire({
              title: "Remark must be in valid format",
              icon: 'warning',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) { { } }
            });
          } else {
            Swal.fire({
              title: response.payload.message,
              icon: 'error',
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.value) { { } }
            });
          }
        }
      }
      catch (e) {
        console.log(e);
      }
    } else if (this.coinsInfo == 'old') {

      try {
        var toConvert: any = []
        for (let i = 0; i < this.files.length; i++) {
          toConvert.push({ 'type': 'file', 'data': this.files[i] })
        }
        var data1 = {
          name: this.userLocal,
          items: toConvert,
          email: this.email
        }

        let response: any = await this.api.convert(data1);
        if (response.status == 'success') {
          this.showLoading(true);
          this.loadingMessage = 'Importing Coins...'
          this.doConvert(response.payload?.id, (data: any) => {
            this.successInfo = true;
            this.successMsg = "Done " + JSON.stringify(data)
          });
        }
        else if (response.status == 'error') {
          if (response.payload.code == 4121) {
            Swal.fire({
              title: 'Please provide Email that exists',
              icon: 'error',
              confirmButtonText: 'Okay',
            }).then(async (result) => {
              if (result.isConfirmed) {
                const { value: email } = await Swal.fire({
                  title: 'Input email address',
                  input: 'email',
                  inputLabel: 'Please provide email address',
                  inputPlaceholder: 'Email address'
                })
                this.email = email;
              }
            });
          }
        }

      } catch (e) {
        console.log(e);
      }
    }

  }

  async fixfracked(data: any) {
    try {
      let response: any = await this.api.postFix(data);
      console.log(response);
      if (response.status === "success") {
        this.isFracked = true;
        this.doCheck1(response.payload?.id, (data: any) => {
          this.successInfo = true;
          this.successMsg = "Done " + JSON.stringify(data)
        })
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doCheck1(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    if (task) {
      if (task.payload.status == "error" || task.payload.status == "completed") {
        if (task.payload.status == "completed") {
          this.frackedDetail = task.payload.data;
          if (task.payload.data.total_errors != 0 || task.payload.data.total_skipped != 0) {
          }
        } else {
          this.btn = true;
          Swal.fire({
            title: "Failure! could not fix the coin.",
            icon: 'warning',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        return;
      }
      setTimeout(() => {
        this.doCheck1(taskID, xdata)
      }, 500)
    }
    else {
      this.errorInfo = true;
      this.successInfo = false;
      this.errorMsg = "Call Failed";
      this.btn = true;
    }
  }

  async doConvert(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      if (task.payload.status == "error" || task.payload.status == "completed") {
        this.showLoading(false);
        if (task.payload.status == "completed") {
          this.btn = false;
          this.afterClick = true;
          this.dateTime = new Date();
          this.storage.setItem("wallet", "localwallet", 'upload');
        } else {
          this.btn = true;
          this.showLoading(false);
          this.files = [];
          Swal.fire({
            title: 'Failure to import!',
            text: 'Error code:' + ' ' + this.payload?.data?.code + '.' + ' ' + this.payload?.data?.message,
            icon: 'warning',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        return;
      }
      setTimeout(() => {
        this.doConvert(taskID, xdata)
      }, 500)
    }
    else {
      this.errorInfo = true;
      this.successInfo = false;
      this.errorMsg = "Call Failed";
      this.btn = true;
    }
  }

  go() {
    this.router.navigate(["/dashboard/home"]);
  }


  deleteFile(index: number) {
    this.files.splice(index, 1);
    if (this.files.length == 0) {
      this.btn = true;
      this.successInfo = false;
      this.errorInfo = false;
    }
  }

}
