import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  usernameTwitter = "@phtu";
  usernameXbox = "PrisioneiroZero";
  usernameTvTime = "pedrohcm5";
  usernameBancoDeSeries = "pedrohcm5";

    constructor(public navCtrl: NavController,
    public alerCtrl: AlertController) {

  }

  
  retornaUsernameTwitter() {
    return this.usernameTwitter;
  }

  retornaUsernameXbox() {
    return this.usernameXbox;
  }

  retornaUsernameTVTime() {
    return this.usernameTvTime;
  }

  retornaUsernameBancoDeSeries() {
    return this.usernameBancoDeSeries;
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
