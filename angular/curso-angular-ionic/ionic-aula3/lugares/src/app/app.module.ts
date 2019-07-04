import { LugaresService } from './../services/lugares';
import { Camera } from '@ionic-native/Camera';
import { File } from "@ionic-native/File";
import { Geolocation} from "@ionic-native/Geolocation";
import { AgmCoreModule } from "angular2-google-maps/core";
import { AdicionaLugarPage } from './../pages/adiciona-lugar/adiciona-lugar';
import { ObtemLocalizacaoPage } from './../pages/obtem-localizacao/obtem-localizacao';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicStorageModule } from "@ionic/storage";

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': 'a5f35405'
//   }
// };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ObtemLocalizacaoPage,
    AdicionaLugarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'xxxxxxxx'
    }),
    IonicStorageModule.forRoot()
    // CloudModule.forRoot(cloudSettings),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ObtemLocalizacaoPage,
    AdicionaLugarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera,
    File,
    LugaresService
  ]
})
export class AppModule {}
