System.register(['angular2/core', 'angular2/router', '../../directives/sidenav/sidenav.directive', '../../directives/dropdown/dropdown.directive', '../dashboard/dashboard.component', '../cliente/cliente.component', '../clientes/clientes.component'], function(exports_1, context_1) {
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
    var core_1, router_1, sidenav_directive_1, dropdown_directive_1, dashboard_component_1, cliente_component_1, clientes_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sidenav_directive_1_1) {
                sidenav_directive_1 = sidenav_directive_1_1;
            },
            function (dropdown_directive_1_1) {
                dropdown_directive_1 = dropdown_directive_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (cliente_component_1_1) {
                cliente_component_1 = cliente_component_1_1;
            },
            function (clientes_component_1_1) {
                clientes_component_1 = clientes_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    this.display = false;
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        templateUrl: 'app/components/main/main.html',
                        directives: [sidenav_directive_1.SideNavDirective, dropdown_directive_1.DropdownDirective, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', name: 'Dashboard', component: dashboard_component_1.DashboardComponent }),
                        new router_1.Route({ path: 'cliente/:id', name: 'Cliente', component: cliente_component_1.ClienteComponent }),
                        new router_1.Route({ path: 'clientes', name: 'Clientes', component: clientes_component_1.ClientesComponent })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map