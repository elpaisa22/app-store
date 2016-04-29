System.register(['angular2/core', 'angular2/router', '../../services/cliente.service'], function(exports_1, context_1) {
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
    var core_1, router_1, cliente_service_1;
    var ClientesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (cliente_service_1_1) {
                cliente_service_1 = cliente_service_1_1;
            }],
        execute: function() {
            ClientesComponent = (function () {
                function ClientesComponent(_clienteService) {
                    this._clienteService = _clienteService;
                }
                /*
                * Retorna la lista de clientes
                */
                ClientesComponent.prototype.getClientes = function () {
                    this.clientes = this._clienteService.getClientes();
                };
                /*
                * Inicializacion
                */
                ClientesComponent.prototype.ngOnInit = function () {
                    this.getClientes();
                };
                ClientesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/clientes/clientes.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [cliente_service_1.ClienteService]
                    }), 
                    __metadata('design:paramtypes', [cliente_service_1.ClienteService])
                ], ClientesComponent);
                return ClientesComponent;
            }());
            exports_1("ClientesComponent", ClientesComponent);
        }
    }
});
//# sourceMappingURL=clientes.component.js.map