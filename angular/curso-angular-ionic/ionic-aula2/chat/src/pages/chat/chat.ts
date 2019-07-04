import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  usuario: string;

  lista: FirebaseListObservable<any>;
  mensagem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {

    this.usuario = this.navParams.get('usuario');

    this.lista=af.database.list("https://chat-2f160.firebaseio.com/chat")
  }

  enviarMsg() {
    let msg = {
      texto: this.mensagem,
      usuario: this.usuario,
      data: new Date().toString()
    };
    this.lista.push(msg).then(()=> {
      this.mensagem = "";
      }
    )
  }


}
