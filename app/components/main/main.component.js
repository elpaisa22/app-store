System.register(['angular2/core', '@angular2-material/button/button', '@angular2-material/sidenav/sidenav', '@angular2-material/toolbar/toolbar', '@angular2-material/checkbox/checkbox', '@angular2-material/radio/radio', '@angular2-material/radio/radio_dispatcher', '@angular2-material/progress-circle/progress-circle', '@angular2-material/card/card', '@angular2-material/input/input', '@angular2-material/list/list', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, button_1, sidenav_1, toolbar_1, checkbox_1, radio_1, radio_dispatcher_1, progress_circle_1, card_1, input_1, list_1, router_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (radio_1_1) {
                radio_1 = radio_1_1;
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
            },
            function (progress_circle_1_1) {
                progress_circle_1 = progress_circle_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        templateUrl: 'app/components/main/main.html',
                        providers: [radio_dispatcher_1.MdRadioDispatcher],
                        directives: [
                            button_1.MdButton,
                            sidenav_1.MD_SIDENAV_DIRECTIVES,
                            toolbar_1.MdToolbar,
                            checkbox_1.MdCheckbox,
                            radio_1.MdRadioButton,
                            progress_circle_1.MdSpinner,
                            card_1.MD_CARD_DIRECTIVES,
                            input_1.MD_INPUT_DIRECTIVES,
                            list_1.MD_LIST_DIRECTIVES,
                            router_1.ROUTER_DIRECTIVES
                        ]
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
