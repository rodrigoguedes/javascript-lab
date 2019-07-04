import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Tabuada</h1>
    <tabuada multiplicador_param="2"></tabuada>
    <br/>
    <tabuada multiplicador_param="3"></tabuada>
  `
})
export class AppComponent { }
