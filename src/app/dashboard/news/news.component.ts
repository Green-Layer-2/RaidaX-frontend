import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: any;
  showLoader: boolean = false;
  options: AnimationOptions = {
    path: 'https://raida11.cloudcoin.global/animation/cloud_loading.json',
  };

  constructor(
    private raida: ApiService,
  ) { }

  ngOnInit(): void {
    this.getNews();
    this.initialize();
  }

  async initialize() {
    this.showLoading(true);
    try {
      let response = await this.raida.init();
      if (response) {
        console.log(response);
        this.showLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  showLoading(state): void {
    if (state) {
      this.showLoader = true;
    } else {
      this.showLoader = false;
    }
  }

  async getNews() {
    let response: any = await this.raida.getNews()
    if (response.status === "success") {
      this.news = response.payload;
    } else {
      this.news = "No data available!"
    }
  }

}
