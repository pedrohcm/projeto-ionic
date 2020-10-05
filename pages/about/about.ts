import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  
editPic: string = "";

  progress: number = 0;
  levelProgress: number;
  loadingStats: boolean;


  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {

    this.loadingStats = true;
    this.progress = 0
  }



}
