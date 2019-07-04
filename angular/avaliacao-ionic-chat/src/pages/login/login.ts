import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    let usuario = null;

    this.formLogin=new FormGroup({
      'usuario': new FormControl(usuario, Validators.required),
    });

  }

  entrar() {
    this.navCtrl.push(ChatPage, {usuario: this.formLogin.value.usuario});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
