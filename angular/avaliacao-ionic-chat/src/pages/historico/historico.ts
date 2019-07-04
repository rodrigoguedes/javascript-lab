import { HistoricoDetalhePage } from './../historico-detalhe/historico-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { DatePipe } from '@angular/common';

/**
 * Generated class for the Historico page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  datas: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private af: AngularFire, private datePipe: DatePipe) {

    let todasMensagens: FirebaseListObservable<any>;

    todasMensagens = af.database.list("https://chat-2f160.firebaseio.com/chat")

    todasMensagens.subscribe((mensagens) => {

      //console.log(mensagens);
      this.datas = [];
      mensagens.forEach(item => {

      //console.log(new Date(item.data));

        var dataMensagem: String = this.datePipe.transform(new Date(item.data), 'dd/MM/yyyy');

        // console.log(dataMensagem);
        // console.log(this.datas.indexOf(dataMensagem));

        if (this.datas.indexOf(dataMensagem) == -1){
           this.datas.push(dataMensagem);
        }

      });
    });

  }

  seleciona(item:any){
    this.navCtrl.push(HistoricoDetalhePage, {data: item});
    console.log(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Historico');
  }

}
