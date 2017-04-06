import { Component } from '@angular/core';

import { App, MenuController,ViewController  } from 'ionic-angular';


@Component({
  selector: 'choose-plan',
  templateUrl: 'choose-plan.html'
})
export class ChoosePlanPage {
  rootPage:any = ChoosePlanPage;
  
  constructor(app: App, public menu: MenuController, private _viewController:ViewController) {
    menu.enable(true);
  }
   ionViewWillEnter() {
        this._viewController.showBackButton(false);
        this.menu.open();
    }
}
