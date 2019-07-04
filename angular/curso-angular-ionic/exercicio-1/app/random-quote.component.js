System.register(['@angular/core', './quote.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, quote_service_1;
    var RandomQuoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quote_service_1_1) {
                quote_service_1 = quote_service_1_1;
            }],
        execute: function() {
            RandomQuoteComponent = (function () {
                function RandomQuoteComponent(quoteService) {
                    this.quoteService = quoteService;
                }
                RandomQuoteComponent.prototype.ngOnInit = function () {
                    this.quote = this.quoteService.generateQuotesByCode(this.nquote);
                    console.log(this.nquote);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], RandomQuoteComponent.prototype, "nquote", void 0);
                RandomQuoteComponent = __decorate([
                    core_1.Component({
                        selector: 'random-quote',
                        template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
                    }), 
                    __metadata('design:paramtypes', [quote_service_1.QuoteService])
                ], RandomQuoteComponent);
                return RandomQuoteComponent;
            }());
            exports_1("RandomQuoteComponent", RandomQuoteComponent);
        }
    }
});
