import { Component,Input, OnInit } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'random-quote',
  //providers: [QuoteService],
  template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
})
export class RandomQuoteComponent implements OnInit {

  @Input() nquote:number;

  quote: Quote;

  // constructor(private quoteService: QuoteService) {
    
    
  // }

  quoteService: QuoteService;

  constructor (quoteService: QuoteService) {
    this.quoteService = quoteService;  
  }

  ngOnInit(): void {
    this.quote = this.quoteService.generateQuotesByCode(this.nquote);
    console.log(this.nquote);  

  }

}
