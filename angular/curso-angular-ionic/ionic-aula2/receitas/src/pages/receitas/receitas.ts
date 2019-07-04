import { ReceitaPage } from './../receita/receita';
import { EditaReceitaPage } from './../edita-receita/edita-receita';
import { ReceitasService } from './../../services/receitas';
import { Receita } from './../../model/receita';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Receita page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-receita',
  templateUrl: 'receitas.html',
})
export class ReceitasPage {

  receitas: Receita[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, private receitaService: ReceitasService) {
    
  }

  ionViewWillEnter() {
    this.receitas = this.receitaService.getReceitas();
  }

  novaReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Nova'});
  }

  carregaReceita(receita: Receita, index: number) {
    this.navCtrl.push(ReceitaPage, {receita: receita, index: index});
  }

}
