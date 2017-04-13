import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FormBuilder,FormGroup , Validators } from '@angular/forms'; 
import { AppHomePage } from '../pages.export'

@Component({
  selector: 'choose-plan',
  templateUrl: 'choose-plan.html'
})
export class ChoosePlanPage {
  
  formValues: any = {
    gender: 'm',
    age: 21,
    height:182,
    weight: 57
  }

formControl:any;

  constructor(public _formBuilder:FormBuilder,
              private _navController: NavController) {}
  
   planForm = this._formBuilder.group({
         'gender' : [null, Validators.compose([Validators.required])],
		    'age': [null,Validators.compose([Validators.required])],
		    'height': [null,Validators.compose([Validators.required])],
		    'weight': [null,Validators.compose([Validators.required])]
		});

    proceed(){
     let caloriesPerDay = this.calculateBMR(this.formValues.gender,this.formValues.weight,this.formValues.height,this.formValues.age);
      this._navController.push(AppHomePage,caloriesPerDay);
    }

    calculateBMR(gender, weight, height, age){
      if(gender === 'm'){
          return 66 + (13.8 * weight) + (5 * height) - (6.8 * age);
      }else if(gender === 'f'){
          return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
      }
    }
}
