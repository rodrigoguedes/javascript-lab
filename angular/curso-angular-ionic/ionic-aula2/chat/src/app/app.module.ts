import { LoginPage } from './../pages/login/login';
import { ChatPage } from './../pages/chat/chat';
import { AngularFireModule } from "angularfire2";
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

export const firebaseConfig = {
  apiKey: "xxxxxxxx",
  authDomain: "chat-2f160.firebaseapp.com",
  databaseURL: "https://chat-2f160.firebaseio.com",
  projectId: "chat-2f160",
  storageBucket: "chat-2f160.appspot.com",
  messagingSenderId: "720308138893"
}

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
