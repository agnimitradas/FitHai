import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http'

import { LoginPage,RegisterPage,ChoosePlanPage,AppHomePage,HomePage} from '../pages/pages.export';
import { RegistrationService } from '../shared/shared-pages.export';

import { GoogleSigninComponent } from './googlelogin/googlelogin.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ChoosePlanPage,
    AppHomePage,
    GoogleSigninComponent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ChoosePlanPage,
    AppHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegistrationService,
    HttpModule
  ]
})
export class AppModule {}
