import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-completed',
  templateUrl: './local-completed.component.html',
  styleUrls: ['./local-completed.component.scss']
})
export class LocalCompletedComponent implements OnInit {

  user: string;

  constructor(
  ) {
    this.user = localStorage.getItem('userLocal');
  }

  async ngOnInit() {
  }

  go() {
    localStorage.setItem('wallet', 'localwallet');
  }


}
