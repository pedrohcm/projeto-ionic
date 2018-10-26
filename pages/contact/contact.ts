import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  usernameTwitter = "@phtu";
  usernameXbox = "PrisioneiroZero";
  usernameTvTime = "pedrohcm5";
  usernameBancoDeSeries = "pedrohcm5";

  constructor(public navCtrl: NavController) {

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

}
