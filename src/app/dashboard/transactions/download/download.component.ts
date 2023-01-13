import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @ViewChild('quoteCanvas') canvas: ElementRef<HTMLCanvasElement>;
  public skywallet: any;
  public username: any;
  public selectedFile: any;
  public selectedData: any;
  public imageWidth: any = 100;
  public imageHeight: any = 100;
  public pngCheck: any;
  public userLocal: string;
  public loadingMessage: string;
  public file: any = "Choose folder";
  public showLoader = false;
  public showNormal = true;
  public uploadFiles: any;
  public payload: any;
  public errorInfo: boolean;
  public successInfo: boolean;
  public exportForm: FormGroup;
  public transaction: any = [];
  public fil: any;
  public all: any[] = [];
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_download.json'
  };
  errorOptions: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/error.json'
  };

  constructor(
    private storage: EventService,
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService) {
    if (localStorage.getItem('skywallet')) {
      this.skywallet = localStorage.getItem('skywallet');
      this.username = (localStorage.getItem('skywallet')).split(".", 1)[0];
    }
    this.exportForm = this.fb.group({
      amount: ['', [Validators.required, Validators.pattern('^(500000|[1-5]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?)$')]],
      tag: [''],
      format: ['png'],
      fileName: ['', Validators.maxLength(64)],
      folder: ['']
    })
  }

  ngOnInit(): void {
    this.userLocal = localStorage.getItem('userLocal');
    if (localStorage.getItem('path') != "" && localStorage.getItem('path') != null && localStorage.getItem('path') != undefined) {
      this.file = localStorage.getItem('path');

    } else {

      this.file = 'C:/Users/user/Downloads';
    }
    this.storage.changeLocal.subscribe
      (message => {
        this.all = message;
      });
  }
  isValidInput(value: any) {
    return this.exportForm.controls[value].invalid &&
      (this.exportForm.controls[value].dirty || this.exportForm.controls[value].touched);
  }
  _keyUp(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
    console.log("fileDetails", this.selectedFile);
    const fileReader = new FileReader();
    const me = this;
    fileReader.readAsDataURL(this.selectedFile);
    fileReader.onload = (e) => {
      this.selectedData = fileReader.result;
      let image: any = new Image();
      image.src = fileReader.result;
      let that = this;
      image.onload = function (en) {
        that.selectedData = this;
        that.canvas.nativeElement.width = this.width;
        that.imageWidth = this.width;
        that.canvas.nativeElement.height = this.height;
        that.imageHeight = this.height;
        const ctx = that.canvas.nativeElement.getContext('2d');
        ctx.drawImage(this, 0, 0, this.width, this.height);
      };

    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  changeDownloadFormat(e) {
    this.pngCheck = e;
  }

  download(filename, text): void {
    const pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
      const event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }

  go() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    this.router.navigate(["/dashboard/home"]);
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  showLoading(state): void {
    if (state) {
      this.showNormal = false;
      this.showLoader = true;
    }
    else {
      this.showNormal = true;
      this.showLoader = false;
    }
  }

  handleFileInput(files) {
    this.uploadFiles = files;
  }

  async getPath() {
    try {
      let response: any = await this.api.filePick();
      console.log(response);
      if (response.status === "success") {
        this.file = response?.payload?.items_picked[0];
        localStorage.setItem('path', this.file);
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async doCheck(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        this.showLoading(false);
        if (this.payload.status == "completed") {
          this.storage.setItem("wallet", "localwallet", 'download');
          const newArr = this.all.map(obj => {
            if (obj.name === this.userLocal) {
              return { ...obj, balance: obj.balance - Number(this.exportForm.get('amount')!.value) };
            }
            return obj;
          });
          this.storage.changeLocaldata(newArr);
          var nuumb: any = Number(sessionStorage.getItem('totalBal')) - Number(this.exportForm.get('amount')!.value);
          sessionStorage.setItem('totalBal', nuumb)
          this.router.navigate(["/dashboard/home"]);
          Swal.fire({
            title: "You have withdrawn " + Number(this.exportForm.get('amount').value) + " CC in " + this.exportForm.get('format')!.value + " format.",
            icon: 'success',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        } else {
          Swal.fire({
            title: this.payload.data.message,
            icon: 'warning',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { }
          });
        }
        this.errorInfo = false;
        return;
      }
      setTimeout(() => {
        this.doCheck(taskID, xdata)
      }, 500)

    }
    else {
      this.errorInfo = true;
      this.successInfo = false;
    }
  }

  getPng(e: any) {
    this.fil = e.files[0].name;
  }

  async exoprt() {
    if (this.exportForm.valid && this.file != "Choose folder") {
      try {
        var exportData = {
          name: this.userLocal,
          amount: Number(this.exportForm.get('amount')!.value),
          tag: this.exportForm.get('fileName')!.value,
          folder: this.file,
          type: this.exportForm.get('format')!.value
        }
        let response: any = await this.api.export(exportData);
        if (response.status == 'error') {
          Swal.fire({
            title: response.payload.message,
            icon: 'warning',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { }
          });
        }
        else {
          this.showLoading(true);
          this.loadingMessage = "Withdrawing CC..."
          this.doCheck(response.payload?.id, (data: any) => {
            this.successInfo = true;
          });
        }
      }
      catch (e) {
        console.log(e);
      }
    }
  }

}
