import { RegistroPage } from './../pages/registro/registro';
import { SigninPage } from './../pages/signin/signin';
import { EditaReceitaPage } from './../pages/edita-receita/edita-receita';
import { ReceitasService } from './../services/receitas';
import { ListaComprasService } from './../services/lista-compras';
import { ListaComprasPage } from './../pages/lista-compras/lista-compras';
import { TabsPage } from './../pages/tabs/tabs';
import { ReceitaPage } from './../pages/receita/receita';
import { ReceitasPage } from './../pages/receitas/receitas';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AutenticacaoService } from './../services/autenticacao';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    ReceitaPage,
    ReceitasPage,
    TabsPage,
    ListaComprasPage,
    EditaReceitaPage,
    RegistroPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReceitaPage,
    ReceitasPage,
    ListaComprasPage,
    TabsPage,
    EditaReceitaPage,
    RegistroPage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaComprasService,
    ReceitasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacaoService
  ]
})
export class AppModule {}
