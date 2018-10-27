import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testRadioOpen = true;
  testRadioResult = null;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');
    alert.addInput({ type: 'radio', label: 'Blue', value: 'blue', checked: true });
    alert.addButton('Cancel');
    alert.addButton({ text: 'OK', handler: data => { this.testRadioOpen = false; this.testRadioResult = data; } });
    alert.present();
  }

}
