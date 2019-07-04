import {Injectable} from "@angular/core"
import {Http,HttpModule,JsonpModule} from "@angular/http"

import 'rxjs/add/operator/toPromise';

import { Email } from './email';

@Injectable()
export class PrincipalService {

  private baseUrl = 'https://aula-angular.firebaseio.com';

  private mensagem:string="Bom dia!";

  constructor(private http:Http){

  }
  
  getMessagem():string{
    return this.mensagem;
  }

  getEmailsMock():Email[] {
    return [
      {
        nome:"Suporte",
        email:"suporte@teste.com" 
      },
      {
        nome:"Carmona",
        email:"reprova@teste.com"
      }
    ];
  }

  getEmails() {
    return this.http.get(`${this.baseUrl}/email.json`)
       .toPromise()
       .then(response => this.convert(response.json()));
   }
 
  postEmail(email) {
    return this.http.post(`${this.baseUrl}/email.json`, email)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  pathEmail(email) {
    let codigo = email.codigo;
    delete email.codigo;
    return this.http.patch(`${this.baseUrl}/email/${codigo}.json`, email)
      .toPromise();
  }

  deleteEmail(codigoEmail) {
    console.log("Service " + codigoEmail)
    return this.http.delete(`${this.baseUrl}/email/${codigoEmail}.json`)
      .toPromise();
  } 
 
  private convert(parsedResponse) {
     return Object.keys(parsedResponse)
       .map(id => ({
         codigo: id,
         nome: parsedResponse[id].nome,
         email: parsedResponse[id].email
       }))
       .sort((a, b) => a.nome.localeCompare(b.nome));
   }

}
