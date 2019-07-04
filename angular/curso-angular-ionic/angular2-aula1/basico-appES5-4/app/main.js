console.log("Carregando principal");
(function(app) {
  console.log(app.AppModule)
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
  var AppModule = app.AppModule;

  platformBrowserDynamic().bootstrapModule(AppModule);

})(window.app || (window.app = {}));


