import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-name',
  templateUrl: './create-name.component.html',
  styleUrls: ['./create-name.component.scss']
})
export class CreateNameComponent implements OnInit {

  localName: FormGroup;
  all: any;
  isDefault: boolean;

  constructor(private fb: FormBuilder,
    private raida: ApiService,
    private router: Router) {
    this.localName = this.fb.group({
      "username": ['', [Validators.required, Validators.pattern('[^<>:"|?*/\\\\]*$')]]
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    try {
      let response: any;
      response = await this.raida.getWallet();
      this.all = response.payload;
      this.all.filter(x => {
        if (x.name == "Default") {
          this.isDefault = true;
        }
      });
    }
    catch (e) {
      console.log(e);
    }
  }

  isValidInput(value: any) {
    return this.localName.controls[value].invalid &&
      (this.localName.controls[value].dirty || this.localName.controls[value].touched);
  }

  async onSubmit() {
    if (this.isDefault == true) {
      try {
        var data = "Default";
        var name = { new_name: this.localName.get('username').value };
        let response: any = await this.raida.rename(data, name);
        if (response.status === "success") {
          this.router.navigate(['/localwallet/localstep-completed']);
        }
      }
      catch (e) {
        console.log(e);
      }
    } else {
      try {
        let idata = {
          name: this.localName.get('username').value,
        }
        let wallet: any = await this.raida.addWallet(idata);
        if (wallet.status == 'success') {
          this.router.navigate(['/localwallet/localstep-completed']);
        }
      }
      catch (e) {
        console.log(e);
      }
    }
    localStorage.setItem('userLocal', this.localName.get('username').value);
  }

}
