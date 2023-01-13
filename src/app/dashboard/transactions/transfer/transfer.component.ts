import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  loadingOptions: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json'
  };
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_transfer.json'
  };
  errorOptions: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/error.json'
  };
  showLoader = false;
  loadingMessage = '';
  public cSelectorImg: string;
  public cSelectorText: string;
  public customSelectorOpen: boolean;
  transaction: any;
  errorInfo: boolean;
  all: any;
  tag: any;
  destName: string;
  transferForm: FormGroup;
  successInfo: boolean;
  payload: any;
  userLocal: any;
  newlocalArr: any[] = [];

  constructor(
    private storage: EventService,
    private router: Router,
    private fb: FormBuilder,
    private api: ApiService) {
    this.cSelectorImg = 'assets/search-w-border.svg';
    this.cSelectorText = 'Select Wallet';
    this.customSelectorOpen = false;
    this.transferForm = this.fb.group({
      amount: ['', Validators.required],
      tag: ['', Validators.maxLength(64)]
    })

  }
  @ViewChild('autofocus') autoFocusField: ElementRef;
  ngAfterViewInit(): void {
    if (this.autoFocusField)
      this.autoFocusField.nativeElement.focus();
  }
  ngOnInit(): void {
    this.userLocal = localStorage.getItem('userLocal');
    this.getAllwallet();
    this.storage.changeLocal.subscribe
      (message => {
        this.newlocalArr = message;
      });
  }

  isValidInput(value: any) {
    return this.transferForm.controls[value].invalid &&
      (this.transferForm.controls[value].dirty || this.transferForm.controls[value].touched);
  }
  sleep(ms): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  showLoading(state): void {
    if (state) {
      this.showLoader = true;
    }
    else {
      this.showLoader = false;
      const that = this;
      setTimeout(() => {
        if (this.autoFocusField) {
          this.autoFocusField.nativeElement.focus();
        }
      }, 100);
    }
  }

  customSelector(val: string, type: string) {
    this.destName = val;
      this.cSelectorImg = 'assets/folder-w-border.svg';
      this.cSelectorText = val;
      this.customSelectorOpen = false;
  }

  customSelToggler(val: string) {
    this.customSelectorOpen = !this.customSelectorOpen;
  }
  closeDropDown() {
    this.customSelectorOpen = false;
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
    }
  }

  async getAllwallet() {
    try {
      let response: any;
      response = await this.api.getWallet();
      if (response.status == 'success') {
        this.all = response.payload;
        var index = this.all.findIndex(x =>
          x.name === this.userLocal
        )
        this.all.splice(index, 1);
        if (this.all?.length == 1) {
          this.cSelectorText = this.all[0].name;
          this.cSelectorImg = 'assets/folder-w-border.svg';
        }
      }
    }
    catch (e) {
      console.log(e);

    }
  }

  _keyUp(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }


  async transferCoin() {
    if (this.transferForm.valid) {
      try {
        var data = {
          srcname: localStorage.getItem('userLocal'),
          dstname: this.cSelectorText,
          amount: Number(this.transferForm.get('amount').value),
          tag: this.transferForm.get('tag').value
        }
        let response: any = await this.api.transfer(data);
        console.log(response, "transfer");
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
          this.loadingMessage = "Transfering CC...";
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

  async doCheck(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.showLoading(false);
          this.storage.setItem("wallet", "localwallet", 'transfer');
          const newArr = this.newlocalArr.map(obj => {
            if (obj.name === this.userLocal) {
              return { ...obj, balance: Number(obj.balance) - Number(this.transferForm.get('amount').value) };
            }
            return obj;
          });
          const newArr2 = newArr.map(obj => {
            if (obj.name === this.cSelectorText) {
              return { ...obj, balance: Number(obj.balance) + Number(this.transferForm.get('amount').value) };
            }
            return obj;
          });
          this.storage.changeLocaldata(newArr2);
          this.router.navigate(["/dashboard/home"]);
          Swal.fire({
            title: "You have transferred " + this.payload?.data.amount + " CC to " + this.cSelectorText,
            icon: 'success',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        } else {
          this.showLoading(false);
          Swal.fire({
            title: this.payload.data.message,
            icon: 'warning',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
        this.successInfo = true;
        this.errorInfo = false;
        return;
      }
      this.successInfo = true;
      setTimeout(() => {
        this.doCheck(taskID, xdata)
      }, 500)

    }
    else {
      this.errorInfo = true;
      this.successInfo = false;
    }
  }
}
