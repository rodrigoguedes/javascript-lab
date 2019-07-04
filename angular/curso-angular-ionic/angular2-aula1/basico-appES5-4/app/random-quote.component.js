console.log("Carregando RandomQuoteComponent");
(function (app) {
  console.log(app.QuoteService);

  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;

  app.RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  })
    .Class({
      constructor: [QuoteService,function (service) {
        this.quote = service.getRandomQuote();
      }]
    });

})(window.app || (window.app = {}));
