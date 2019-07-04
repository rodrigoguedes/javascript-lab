System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var TabuadaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TabuadaComponent = (function () {
                function TabuadaComponent() {
                    this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                }
                TabuadaComponent.prototype.ngOnInit = function () {
                    this.multiplicador = this.multiplicador_param;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TabuadaComponent.prototype, "multiplicador_param", void 0);
                TabuadaComponent = __decorate([
                    core_1.Component({
                        selector: 'tabuada',
                        template: " <input type=\"number\" [(ngModel)]=\"{{multiplicador}}\" />\n              <li *ngFor=\"let meu_numero of numeros\" >\n                {{multiplicador}} x {{meu_numero}} = {{multiplicador * meu_numero}} \n              </li>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TabuadaComponent);
                return TabuadaComponent;
            }());
            exports_1("TabuadaComponent", TabuadaComponent);
        }
    }
});
