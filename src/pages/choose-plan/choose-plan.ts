import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';


@Component({
  selector: 'choose-plan',
  templateUrl: 'choose-plan.html'
})
export class ChoosePlanPage {
  rootPage:any = ChoosePlanPage;
  
  constructor(private _viewController:ViewController) {}
  
   
}
