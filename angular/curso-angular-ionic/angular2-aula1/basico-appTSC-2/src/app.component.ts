import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Random Quote</h1>
    <random-quote nquote="2"></random-quote>
    <tabuada numero="2"></tabuada>
  `
})
export class AppComponent { }
