import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import Swal from 'sweetalert2';
import { EventService } from 'src/app/services/event.service';
import { ApiService, DataService } from 'src/app/services/api.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface tableData {
  datetime: string;
  message: string;
  type: string;
  amount: any;
  running_balance: any;
}
export interface tableData1 {
  time: string;
  memo: string;
  type: string;
  amount: Number;
  balance: Number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  dtOptions: any = {};

  public showDropDown: boolean;
  showRaida: boolean = false;
  public showWalletDropdown: boolean;
  public themeDarkActive: boolean;
  public themeLightActive: boolean;
  totalBalance: any = 0;
  showbal: boolean = false;
  checkerror: boolean = false;


  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
  };
  errorOptions: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/error.json'
  };
  public showLeftBarOnSm: boolean = true;
  showLoader = false;
  receiptTime: any;
  receipid: any;
  latencies: any;
  showLoader1: boolean = false;
  deleteUserModal: boolean;
  deleteForm: FormGroup;
  loadingMessage = '';
  successInfo: boolean;
  errorInfo: boolean;
  receiptdetails: any;
  showreceipt: boolean = false;
  payload: any;
  taskId: any;
  successMsg: string;
  errorMsg: string;
  userDetails: any;
  transaction: any = [];
  type: string;
  userLocal: string;
  wallet_name: any;
  all: any;
  data: any;
  deleteTrans: FormGroup;
  fixModal: boolean = false;
  fixlimboModal: boolean = false;
  deleteModal: boolean = false;
  backupModal: boolean = false;
  healthModal: boolean = false;
  renameModal: boolean = false;
  test: any;
  displayedColumns: string[] = ['datetime', 'message', 'type', 'amount', 'running_balance']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('reName') searchElement: ElementRef;
  dataSourceSky: MatTableDataSource<tableData1>;
  sortedData: tableData[];
  totalcoins: any;
  totalauthentic: any;
  totalfracked: any;
  totalcounterfeit: any;
  totallimbo: any;
  transactions: any;
  walletName: any;

  constructor(
    private onlyonce: DataService,
    private router: Router,
    private eventService: EventService,
    private api: ApiService,
    private fb: FormBuilder,
  ) {

    this.totalBalance = Number(sessionStorage.getItem('totalBal'));;
    this.type = localStorage.getItem('wallet');
    this.userLocal = localStorage.getItem('userLocal');
  }

  ngOnInit(): void {
    this.getEcho();
    setInterval(() => {
      this.getEcho();
    }, 20000);

    this.eventService.changeLocal.subscribe
      (message => {
        if (message[0] != "Empty") {
          if (message.length == 0) {
            this.totalBalance = 0;
            this.getAllwallet();
          } else {
            this.all = message;
          }
        }
      });
  
    if (window.innerWidth < 992) {
      this.showLeftBarOnSm = false
    }
    this.deleteForm = this.fb.group({
      check2: ['', [Validators.required]]
    });
    this.deleteTrans = this.fb.group({
      check2: ['', [Validators.required]]
    });

    this.test = this.eventService.watchStorage().subscribe((data: string) => {
      this.type = localStorage.getItem('wallet');
      if (data == 'changelocal') {
        this.userLocal = localStorage.getItem('userLocal');
        this.wallet_name = this.userLocal;
        this.getTransaction();
      } 
  
       else if (data === 'rename' || data == 'upload' || data === 'download' || data === 'transfer' || data == 'localdelete' || data == 'createlocal') {
        this.userLocal = localStorage.getItem('userLocal');
        this.getTransaction();
        this.getAllwallet();
       } 
  
    })
    this.showDropDown = false;
    
    let localcoin = JSON.parse(localStorage.getItem('cc'));
    let myCurrentDate = new Date();
    let datacheck = {
      "coin": {
        an: localcoin?.an,
        sn: localcoin?.sn
      },
      "start_ts": parseInt((myCurrentDate.getTime() / 1000).toString())
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
      this.getTransaction();
    
    this.showWalletDropdown = false;
  }

  ngOnDestroy() {
    this.test?.unsubscribe()
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
        this.onlyonce.setData('leftover')
        if (response?.payload?.balance > 0) {
          Swal.fire({
            title: "Looks like the last import did not finish. Continuing import leftover coins",
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
    this.fixFracked()
  }

  callLeftBar() {
    if (window.innerWidth < 992) {
      this.showLeftBarOnSm = true;
    }
  }
  closeLeftBar() {
    if (window.innerWidth < 992) {
      this.showLeftBarOnSm = false;
    }
  }

  transferCC() {
   
    if (Number(localStorage.getItem('localLength')) > 1 && this.transaction.payload?.balance != 0) {
      this.router.navigate(['/dashboard/transactions/transfer']);
      this.fixFracked();
    } else if (Number(localStorage.getItem('localLength')) < 2) {
      Swal.fire({
        title: 'You can not transfer as there is only one localwallet.',
        icon: 'info',
        confirmButtonText: 'Okay',
      }).then((result) => {
        if (result.value) {
        }
      });
    }
    else if (this.transaction.payload?.balance == 0 || this.checkerror) {
      Swal.fire({
        title: 'You cannot transfer as your wallet is empty.',
        icon: 'info',
        confirmButtonText: 'Okay',
      }).then((result) => {
        if (result.value) {
        }
      });
    }
  }


  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  closeDropDown() {
    this.showDropDown = false;
  }

  toggleWltFunc() {
    this.showWalletDropdown = !this.showWalletDropdown;
  }
  closeWltFunc() {
    this.showWalletDropdown = false;
  }


  sortData(sort: Sort) {
    const data = this.transaction.payload?.transactions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'datetime':
          return this.compare(a.datetime, b.datetime, isAsc);
        case 'message':
          return this.compare(a.message, b.message, isAsc);
        case 'type':
          return this.compare(a.type, b.type, isAsc);
        case 'amount':
          return this.compare(a.amount, b.amount, isAsc);
        case 'running_balance':
          return this.compare(a.running_balance, b.running_balance, isAsc);
        default:
          return 0;
      }
    });
  }



  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


  ngAfterViewInit(): void { }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  async rename() {
    try {
      var data = this.userLocal;
      var name = { new_name: this.wallet_name };
      let response: any = await this.api.rename(data, name);
      if (response.status === "success") {
        this.renameModal = !this.renameModal;
        const newArr = this.all.map(obj => {
          if (obj.name === this.userLocal) {
            return { ...obj, name: this.wallet_name };
          }
          return obj;
        });
        this.eventService.changeLocaldata(newArr);
        this.eventService.setItem('userLocal', this.wallet_name, 'changelocal');
        Swal.fire({
          title: 'Wallet has been renamed!',
          icon: 'success',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) {
          }
        });
      } else {
        this.renameModal = !this.renameModal;
        Swal.fire({
          title: response.payload?.message,
          icon: 'error',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) {
          }
        });
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  download() {
      if (this.transaction?.payload?.transactions?.length === 0) {
        Swal.fire({
          title: 'No Transactions.',
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) { }
        });
      }
      else {
        this.downloadFile(this.transaction?.payload?.transactions, 'jsontocsv', this.userLocal);
      }
  }

  listDownload() {
    if (this.transaction?.payload?.balance === 0) {
      Swal.fire({
        title: 'Your wallet is empty.',
        icon: 'info',
        confirmButtonText: 'Okay',
      }).then((result) => {
        if (result.value) { }
      });
    } else {
      var content = this.transaction?.payload?.contents;
      var serial = content.join(",");
      this.downloadContent(serial, 'jsontocsv', this.userLocal);
    }
  }

  downloadContent(data, filename = 'data', name) {
    let blob = new Blob(['\ufeff' + data], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", name + ".Serial.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }



  downloadFile(data, filename = 'data', name) {
  
    var arrHeader = ["amount", "datetime", "message", "type", "running_balance"];
  
    let csvData = this.ConvertToCSV(data, arrHeader);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", name + ".History.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';
    // if (this.type === "localwallet") {
      var newHeaders = ["Amount", "Date", "Message", "Type", "Balance"];
    // } else {
    //   var newHeaders = ["Amount", "Date", "Memo", "Type", "Balance"];
    // }
    for (let index in newHeaders) {
      row += newHeaders[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array?.length; i++) {
      let line = (i + 1) + '';
      for (let index in headerList) {
        let head = headerList[index];
        line += ',' + this.strRep(array[i][head]);
      }
      str += line + '\r\n';
    }
    return str;
  }

  strRep(data) {
    if (typeof data == "string") {
      let newData = data.replace(/,/g, " ");
      return newData;
    }
    else if (typeof data == "undefined") {
      return "-";
    }
    else if (typeof data == "number") {
      return data.toString();
    }
    else {
      return data;
    }
  }

  showLoading(state): void {
    this.loadingMessage = '';
    if (state) {
      this.showLoader = true;
     
    } else {
      this.showLoader = false;
    }
  }


  amountExchange(amount: number) {
    return amount;
  }

  returnZero() {
    return 0
  }

  async getEcho() {
    this.successInfo = false;
    this.errorInfo = false;
    this.payload = null;
    this.taskId = null;
    try {
      let response: any = await this.api.raidaEcho();
      if (response) {
        this.payload = response.payload;
        this.taskId = this.payload.id;
        this.successInfo = true;
        this.successMsg = "Echo sent. Task ID" + this.taskId;
        this.doTaskPoll(this.taskId);
      }
    }
    catch (e) {
      Swal.fire({
        title: 'Raida Servers disconnected!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Reconnect',
      }).then((result) => {
        if (result.value) {
          {
            let currentUrl = this.router.url;
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);
            this.getEcho();
          }
        }
      });
    }
  }

  async doTaskPoll(taskID: any) {
    let task: any = await this.api.doTaskPoll(taskID);
    if (task) {
      this.payload = task.payload;
      this.latencies = this.payload?.data?.latencies;
      if (this.payload.status == "completed") {
        this.showLoading(false);
        let data = this.payload.data;
        this.successMsg = "Echo done. Online: " + data.online + "/25, pown:" + data.pownstring;
        let h = "";
        for (let i = 0; i < data.pownarray.length; i++) {
          let st = data.pownarray[i]
          if (st != 1) {
            h += "<span class='rf'>" + i + "</span>"
          } else {
            h += "<span class='pf'>" + i + "</span>"
          }
        }
        return;
      }
      this.successMsg = "Doing Echo. Task ID " + taskID + ", Progress " + this.payload.progress + "%";
      setTimeout(() => {
        this.doTaskPoll(taskID)
      }, 500)
    }
  }

  async getTransaction() {
    var data = this.userLocal;
    try {
      let response: any = await this.api.getTransaction(data);
      if (response.status == "success") {
        this.transaction = response;
        this.sortedData = this.transaction?.payload?.transactions.reverse();
      } else {
        console.log(response.message);
      }
    }
    catch (e) {
      console.log(e);
      this.errorInfo = true;
      this.errorMsg = "Failed";
    }
  }

  async getWallet() {
    var data = this.userLocal;
    try {
      let response: any = await this.api.walletname(data);
      this.userDetails = response.payload;
    }
    catch (e) {
      console.log(e);
      this.errorInfo = true;
      this.errorMsg = "Failed";
    }
  }


  redirect(val: string) {
    if (val == 'export') {
      if (this.transaction.payload?.balance == 0) {
        Swal.fire({
          title: "Wallet is empty. You can't export.",
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) {
          }
        });
      } else {
        this.router.navigate(['/dashboard/transactions/export']);
        this.fixFracked();
      }
    }
  }

  async deleteUserModalToggler(val: string) {
    if (val === 'deletewallet') {
      if (this.transaction.payload?.balance !== 0) {
        Swal.fire({
          title: "Wallets must be empty before they can be deleted. Please empty this wallet and try again",
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) {
          }
        });
      } else {
        this.deleteUserModal = !this.deleteUserModal;
      }
    } else if (val === 'fix') {
      if (this.transaction.payload?.balance === 0) {
        Swal.fire({
          title: "Wallet is empty.",
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) { }
        });
      } else if (this.transaction.payload?.balance != 0) {
      }
      else {
        this.fixModal = !this.fixModal;
      }
    }
    else if (val === 'fixlimbo') {
      if (this.transaction.payload?.balance === 0) {
        Swal.fire({
          title: "Wallet is empty.",
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) { }
        });
      } else if (this.transaction.payload?.balance != 0) {
        this.checkLimbo();
      }
      else {
        this.fixlimboModal = !this.fixlimboModal;
      }
    }
    else if (val === 'health') {
      if (this.transaction.payload?.balance === 0) {
        Swal.fire({
          title: "Wallet is empty.",
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) { }
        });
      } else {
        this.healthModal = !this.healthModal;
      }
    } else if (val === 'delete') {
      if (this.transaction?.payload?.transactions?.length === 0) {
        Swal.fire({
          title: 'No Transactions.',
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) { }
        });
      } else {
        this.deleteModal = !this.deleteModal;
      }
    } else if (val === 'backup') {
      if (this.transaction?.payload?.balance === 0) {
        Swal.fire({
          title: "Wallet is empty.",
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) { }
        });
      } else {
        this.backupModal = !this.backupModal;
      }
    } else if (val === "rename") {
      var data = this.userLocal;
      let result: any = await this.api.walletname(data);
      var wallet_balance = result.payload?.balance;
      if (wallet_balance > 0) {
        Swal.fire({
          title: "You cannot rename wallet containing coins!",
          icon: 'info',
          confirmButtonText: 'Okay',
        })
      } else {
        this.renameModal = !this.renameModal;
        setTimeout(() => {
          this.searchElement?.nativeElement.focus();
        }, 0);
      }
    }
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
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
        } else {
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

  async checkLimbo() {
    try {
      var data = this.userLocal;
      let response: any = await this.api.getTransaction(data);

      if (response.status == "success") {
        this.showLoader1 = true;
        this.loadingMessage = "Detecting unprocessed coins..."
        if (response.payload?.limbo_count > 0) {
          this.fixLimbo()

        }
        else {
          this.showLoader1 = true;
          Swal.fire({
            title: "No unprocessed coin found!",
            icon: 'info',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) {
              {
                this.router.navigate(['/dashboard/home'])
              }
            }
          });
          this.showLoader1 = false;
        }
        return;

      }
      else {
        this.showLoader1 = false;
      }

    }
    catch (e) {
      this.showLoader1 = false;
      console.log(e)
    }
    setTimeout(() => {
      this.checkLimbo()
    }, 500)
  }

  fixLimbo() {
    this.showLoader1 = false;
    this.fixlimboModal = !this.fixlimboModal;
  }
  async doCheckLimbo(taskID: any, xdata: any) {
    let task: any = await this.api.doCheck(taskID);
    console.log("Task done: ", task);
    if (task) {
      this.payload = task.payload;
      if (this.payload.status == "error" || this.payload.status == "completed") {
        if (this.payload.status == "completed") {
          this.showLoader1 = false;
          this.fixlimboModal = !this.fixlimboModal;
          return

        }
      }
    }
  }

  async fixLimboCoins() {
    var data = {
      name: this.userLocal
    }
    let response: any = await this.api.fixlimbo(data);
    if (response.status == "success") {
      this.doCheckLimbo(response.payload?.id, (data: any) => { });
      console.log("success")

    }
    else {
      console.log("failure")
    }
  }


  async deleteTransaction() {
    this.deleteModal = !this.deleteModal;
    try {
      var data = this.userLocal;
      let response: any = await this.api.deletetransaction(data);
      console.log(response);
      if (response.status === "success") {
        this.deleteTrans.reset();
        this.getTransaction();
        Swal.fire({
          title: "Transaction history has been deleted successfully!",
          icon: 'success',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) {
          }
        });
      } else {
        this.deleteTrans.reset();
        Swal.fire({
          title: response.payload.message,
          icon: 'error',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) { }
        });
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async deletewallet() {
    try {
      if (this.deleteForm.valid) {
        var data = this.userLocal;
        let response: any = await this.api.deleteWallet(data);
        this.deleteUserModal = !this.deleteUserModal;
        if (response.status == "error") {
          Swal.fire({
            title: response.payload.message,
            icon: 'error',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) {
            }
          });
        }
        else {
          var index = this.all.findIndex(x =>
            x.name === this.userLocal
          );
          this.all.splice(index, 1);
          this.eventService.changeLocaldata(this.all);
          this.deleteForm.reset();
          if (this.all?.length != 0) {
            for (let i = 0; i < this.all?.length; i++) {
              if (this.userLocal !== this.all[i].name) {
                this.eventService.setItem('userLocal', this.all[i++].name, 'changelocal');
                break;
              }
            }
          }
          Swal.fire({
            title: "Wallet deleted successfully!",
            icon: 'success',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) {
              {
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

  async receipt(guid: any, time: any) {
    this.receiptTime = time;
    this.receipid = guid;
    if (this.receipid == '-') {
      Swal.fire({
        title: 'The balance was adjusted automatically because files were changed within the Coin Manager file structure.' +
          ' Most likely because a user added or removed coins manually to the bank or fracked folders.',
        icon: 'info',
        confirmButtonText: 'Okay',
      })
    }
    try {
      var name = this.userLocal
      let data = guid
      let response: any = await this.api.getReceipts(name, data);
      if (response.status === "success") {
        this.receiptdetails = response.payload?.transactions;
        this.totalcoins = response.payload?.total_coins;
        this.totalauthentic = response.payload?.total_authentic;
        this.totalfracked = response.payload?.total_fracked;
        this.totalcounterfeit = response.payload?.total_counterfeit;
        this.totallimbo = response.payload?.total_limbo;
        this.showreceipt = true;
      } else {
        this.showreceipt = false;
      }
    } catch (e) {
      console.log(e);
    }
  }
  
}
