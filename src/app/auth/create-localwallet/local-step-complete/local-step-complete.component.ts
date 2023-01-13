import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-step-complete',
  templateUrl: './local-step-complete.component.html',
  styleUrls: ['./local-step-complete.component.scss']
})
export class LocalStepCompleteComponent implements OnInit {

  user: string;

  constructor(
  ) {
    
    this.user = localStorage.getItem('userLocal');
   }

  async ngOnInit() { 
  }

  go(){
    
    localStorage.setItem('wallet', 'localwallet');
  }

}
