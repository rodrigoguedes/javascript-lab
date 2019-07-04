import { Component, Input, OnInit} from '@angular/core';

@Component ({
  selector: 'tabuada',

  template: ` <input type="number" [(ngModel)]="{{multiplicador}}" />
              <li *ngFor="let meu_numero of numeros" >
                {{multiplicador}} x {{meu_numero}} = {{multiplicador * meu_numero}} 
              </li>`
})

export class TabuadaComponent implements OnInit {

  multiplicador : number;

  @Input() multiplicador_param:number;

  numeros = [1,2,3,4,5,6,7,8,9,10];

  constructor() {
  }

  ngOnInit(): void {
    this.multiplicador = this.multiplicador_param;
  }

}