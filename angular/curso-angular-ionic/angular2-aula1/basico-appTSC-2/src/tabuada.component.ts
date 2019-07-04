import { Component, Input } from '@angular/core';

@Component({
    selector: 'tabuada',
    template: `
    <input type="number" (change)="calcula($event.target.value)" [value]="numero"/>
    <p *ngFor="let i of lista">
  {{numero}} x {{i}} = {{numero*i}}
  </p>`

})
export class Tabuada {

    lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    @Input() numero: number;

    calcula(valor:number) {
        this.numero = valor;
    }

}
