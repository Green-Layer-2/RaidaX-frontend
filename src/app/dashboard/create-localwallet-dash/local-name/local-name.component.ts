import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-local-name',
  templateUrl: './local-name.component.html',
  styleUrls: ['./local-name.component.scss']
})
export class LocalNameComponent implements OnInit {

  localName: FormGroup;

  constructor(private fb: FormBuilder,
    private raida: ApiService,
    private storage: EventService,
    private router: Router) {
    this.localName = this.fb.group({
      "username": ['', [Validators.required, Validators.pattern('[^<>:"|?*/\\\\]*$')]]
    })
  }

  ngOnInit(): void {
  }

  isValidInput(value: any) {
    return this.localName.controls[value].invalid &&
      (this.localName.controls[value].dirty || this.localName.controls[value].touched);
  }

  async onSubmit() {
    try {
      let idata = {
        name: this.localName.get('username').value,
      }
      let wallet: any = await this.raida.addWallet(idata);
      if (wallet.status == 'success') {
        this.getAllwallet();
        Swal.fire({
          title: "Wallet has been created successfully.",
          icon: 'success',
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.value) {
            {
              localStorage.setItem("wallet", "localwallet");
              this.storage.setItem("userLocal", this.localName.get('username').value, 'createlocal');
              this.router.navigate(["/dashboard/home"]);
            }
          }
        });
      } else {
        Swal.fire({
          title: wallet?.message,
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

  async getAllwallet() {
    try {
      let response: any;
      response = await this.raida.getWallet();
      if (response.status == "success") {
        this.storage.changeLocaldata(response.payload);
        localStorage.setItem('localLength', response?.payload?.length);
      }
    }
    catch (e) {
      console.log(e);
    }
  }

}
