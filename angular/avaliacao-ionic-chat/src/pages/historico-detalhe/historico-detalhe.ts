import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { DatePipe } from '@angular/common';

/**
 * Generated class for the HistoricoDetalhe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-historico-detalhe',
  templateUrl: 'historico-detalhe.html',
})
export class HistoricoDetalhePage {

  data: String;

  mensagensDoDia: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private af: AngularFire, private datePipe: DatePipe) {

    this.data = this.navParams.get('data');

    let todasMensagens: FirebaseListObservable<any>;

    todasMensagens = af.database.list("https://chat-2f160.firebaseio.com/chat")

    todasMensagens.subscribe((mensagens) => {

      //console.log(mensagens);
      this.mensagensDoDia = [];
      mensagens.forEach(item => {

      //console.log(new Date(item.data));

        var dataMensagem: String = this.datePipe.transform(new Date(item.data), 'dd/MM/yyyy');

        if (dataMensagem == this.data){
            this.mensagensDoDia.push(item);
        }

      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoDetalhe');
  }

}
