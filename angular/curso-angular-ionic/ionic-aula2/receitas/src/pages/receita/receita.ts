import { EditaReceitaPage } from './../edita-receita/edita-receita';
import { ReceitasService } from './../../services/receitas';
import { ListaComprasService } from './../../services/lista-compras';
import { Receita } from './../../model/receita';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Receita page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class  ReceitaPage implements OnInit {

  receita: Receita;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private listaComprasService: ListaComprasService,
              private receitasService: ReceitasService,
              private alertCtrl: AlertController) {}

  ngOnInit(): void {
      this.receita=this.navParams.get('receita');
      this.index=this.navParams.get('index');
  }

  alteraReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Altera', receita: this.receita, index: this.index})
  }

  removeReceita() {
    this.receitasService.removeReceita(this.index);
    this.navCtrl.popToRoot();
  }

  adicionaIngredientes() {
    this.listaComprasService.incluiItens(this.receita.ingredientes);

    let alert = this.alertCtrl.create({
      title: 'Lista de Compras',
      subTitle: 'Item adicionado com sucesso.',
      buttons: ['Ok']
    });
    alert.present();

  }
}
