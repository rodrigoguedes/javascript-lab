console.log("Carregando AppComponent");
(function(app) {
  console.log(app.RandomQuoteComponent);
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'my-app',
    template:
      '<h1>Random Quote</h1>' +
      '<random-quote></random-quote>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

})(window.app || (window.app = {}));
