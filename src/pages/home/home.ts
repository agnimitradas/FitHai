import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage, ChoosePlanPage } from '../pages.export';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  oldSchoolLogIn(){
    this.navCtrl.push(LoginPage);
  }

  fbLogIn(){
    this.navCtrl.push(ChoosePlanPage);
  }
  
  googleLogin(){
    alert("Google");
  }
}
