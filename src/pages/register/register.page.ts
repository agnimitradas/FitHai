import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms'; 

import { RegistrationService } from '../../shared/shared-pages.export';

@Component({
  selector: 'register-page',
  templateUrl: 'register.page.html'
})
export class RegisterPage {

  registrationInputs= {
    name:'',
    email:'',
    password:''
  };

  constructor(public navCtrl: NavController,
              public _formBuilder:FormBuilder,
              private _registrationService:RegistrationService) {
    
  }
authForm = this._formBuilder.group({
      'name':[null,Validators.compose([Validators.required])],
      'email' : [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
		  'password': [null,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])]
		})
        
  register(){
      this.navCtrl.push(RegisterPage);
      //this._registrationService.doRegister(this.registrationInputs);
  }
}
