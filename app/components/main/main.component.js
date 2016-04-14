System.register(['angular2/core', 'primeng/primeng'], function(exports_1, context_1) {
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
    var core_1, primeng_1, primeng_2, primeng_3;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
                primeng_2 = primeng_1_1;
                primeng_3 = primeng_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    this.display = false;
                }
                MainComponent.prototype.showDialog = function () {
                    this.display = true;
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        template: "\n        <h1>My First 2 App</h1>\n        <input type=\"text\" pInputText [(ngModel)]=\"text\"/>\n        {{text}}\n\t\t\t\t<hr/>\n\t\t\t\t<button pButton type=\"button\" (click)=\"showDialog()\" icon=\"fa-check\" iconPos=\"left\" label=\"Saludar\"></button>\n\n\t\t\t\t<p-dialog header=\"Title\" [(visible)]=\"display\" modal=\"modal\">\n\t\t\t\t    Hola {{text}}\n\t\t\t\t</p-dialog>\n    ",
                        directives: [primeng_1.InputText, primeng_2.Button, primeng_3.Dialog]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map