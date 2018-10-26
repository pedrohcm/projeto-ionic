import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public alerCtrl: AlertController) {

  }

  mostraAlertOla() {
    let alert = this.alerCtrl.create({
      title: 'Olá',
      message: 'Tudo bem?',
      buttons: ['Ok']
    });
    alert.present()
  }
  mostraAlertMassa() {
    let alert = this.alerCtrl.create({
      title: 'Massa',
      message: 'Peso',
      buttons: ['Ok']
    });
    alert.present()
  }
  mostraAlertShow() {
    let alert = this.alerCtrl.create({
      title: 'Show!',
      message: 'Mesmo!',
      buttons: ['Ok']
    });
    alert.present()
  }
}
