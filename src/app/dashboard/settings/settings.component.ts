import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  public settings: boolean = false;
  public req: any;
  public max: any;
  public echo: any;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getSetting();
  }

  async getSetting() {
    let response: any = await this.api.setting();
    if (response.status == 'success') {
      this.req = response.payload?.default_timeout_mult;
      this.echo = response.payload?.echo_timeout_mult;
      this.max = response.payload?.max_notes;
    }
  }
  formatLabel(value: number) {
    let response = value + '%';
    return response;
  }

  updateSetting(e, name) {
    this.settings = true;
    if (name == 'req') {
      this.req = e.value;
    }
    else if (name == 'echo') {
      this.echo = e.value;
    }
    else if (name == 'max') {
      this.max = e.value;
    }
  }

  async taskSetting() {
    if (this.settings == true) {
      try {
        var data = {
          "default_timeout_mult": this.req,
          "echo_timeout_mult": this.echo,
          "max_notes": this.max,
          "change_server_sn": 2
        }
        let response: any = await this.api.settingTask(data);
        console.log(response);
        if (response.status === "success") {
          Swal.fire({
            title: "Changes saved successfully!",
            icon: 'success',
            confirmButtonText: 'Okay',
          }).then((result) => {
            if (result.value) { { } }
          });
        }
      }
      catch (e) {
        console.log(e);
      }
    }
  }
}
