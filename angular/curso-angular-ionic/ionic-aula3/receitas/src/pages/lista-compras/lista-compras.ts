import { ListaComprasService } from './../../services/lista-compras';
import { Ingrediente } from './../../model/ingrediente';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

/**
 * Generated class for the ListaCompras page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras.html',
})
export class ListaComprasPage {

  listaItens: Ingrediente[];

  constructor(private listaComprasService : ListaComprasService) {
  }

  incluiItem(form: NgForm ) {
    console.log(form);
    this.listaComprasService.incluiItem(form.value.nomeIngrediente, form.value.qtdeIngrediente);
    this.carregaItens();
    form.reset();
  }

  ionViewWillEnter() {
    this.carregaItens();
  }

  carregaItens() {
    this.listaItens = this.listaComprasService.getItens();
  }

  verificaItem(index: number) {
    this.listaComprasService.removeItem(index);
    this.carregaItens();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCompras');
  }

}
