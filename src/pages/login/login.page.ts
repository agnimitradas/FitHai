import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FormBuilder,FormGroup , Validators } from '@angular/forms'; 

import { RegisterPage } from '../pages.export';

@Component({
  selector: 'login-page',
  templateUrl: 'login.page.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,public _formBuilder:FormBuilder) {
    
  }
authForm = this._formBuilder.group({
          'email' : [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
		  'password': [null,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])]
		})
        
  register(){
      this.navCtrl.push(RegisterPage);
  }
}
