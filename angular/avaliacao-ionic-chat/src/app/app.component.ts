import { HistoricoDetalhePage } from './../pages/historico-detalhe/historico-detalhe';
import { HistoricoPage } from './../pages/historico/historico';
import { SigninPage } from './../pages/signin/signin';
import { ChatPage } from './../pages/chat/chat';
import { Component, ViewChild, Inject } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AutenticacaoService } from "../service/autenticacao";
import firebase from 'firebase';
import { FirebaseApp } from "angularfire2";
import { RegistroPage } from "../pages/registro/registro";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;
  isAuthenticated: boolean;
  signinPage = SigninPage;
  registroPage = RegistroPage;
  historicoPage = HistoricoPage;
  historicoDetalhePage = HistoricoDetalhePage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private autenticacaoService: AutenticacaoService,
    @Inject(FirebaseApp) firebaseApp: any) {

    firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.isAuthenticated=true;
            this.rootPage = ChatPage;
          } else {
            this.isAuthenticated=false;
            this.rootPage = SigninPage;
          }
        });

  //  this.isAuthenticated=false;

    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });

  }

 carrega(page: any) {
   console.log('Abrindo Page');
   console.log(page);
   this.nav.setRoot(page);
   this.menuCtrl.close();
  }

  logout() {
    this.autenticacaoService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }

}

