import { Component } from '@angular/core';

import { PrincipalService } from './principal.service';
import { Email } from './email';

@Component({
  selector: 'principal',
  templateUrl: 'principal.component.html',
  styleUrls: ['principal.component.css']
})
export class PrincipalComponent {

  mensagem:string;
  emails: Email[];
  emailSelecionado: Email;

  constructor(private principalService: PrincipalService) {
    this.mensagem = principalService.getMessagem();
    this.limpa();
    this.reload();
  }

  limpa() {
    return this.principalService.getEmails()
      .then(emails => this.emails = emails);
  }

  private reload() {
    return this.principalService.getEmails()
      .then(emails => this.emails = emails);
  }
  
  salvar(email) {
    if (email.codigo) {
      this.principalService.pathEmail(email)
        .then(result => {
          this.reload()
          this.mensagem = "Alterou!!!!";
          this.limpa();
        }).catch(error => {
          this.mensagem = "Problema ao alterar: " + error
        })
    }
    else {
      this.principalService.postEmail(email)
        .then(result => {
          this.reload()
          this.mensagem = "Salvou!!!!";
          this.limpa();
        }).catch(error => {
          this.mensagem = "Problema ao salvar: " + error
        })
    }
  }

  deletaEmail(codigoEmail) {
    this.principalService.deleteEmail(codigoEmail)
      .then(() => {
        this.reload()
        this.mensagem = "Deletado com Sucesso!!!"
      })
  }

  selecionaEmail(email) {    
    this.emailSelecionado = Object.assign({}, email);
  }

}
