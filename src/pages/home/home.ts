import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../pages.export';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  oldSchoolLogIn(){
    this.navCtrl.push(LoginPage,{},{animate: true, direction: 'back'});
  }

  fbLogIn(){
    alert("FB");
  }
  
  googleLogin(){
    alert("Google");
  }
}
