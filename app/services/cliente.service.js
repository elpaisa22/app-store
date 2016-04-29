System.register(['angular2/core'], function(exports_1, context_1) {
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
    var ClienteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ClienteService = (function () {
                function ClienteService() {
                    this.clientes = [
                        { "id": 11, "nombre": "Mr. Nice", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "02134542", "fechaNacimiento": "31/11/2015" },
                        { "id": 12, "nombre": "Narco", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "5464" },
                        { "id": 13, "nombre": "Bombasto", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "654687" },
                        { "id": 14, "nombre": "Celeritas", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "2135458" },
                        { "id": 15, "nombre": "Magneta", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "985454" },
                        { "id": 16, "nombre": "RubberMan", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "02134542" },
                        { "id": 17, "nombre": "Dynama", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "5468787" },
                        { "id": 18, "nombre": "Dr IQ", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "654878" },
                        { "id": 19, "nombre": "Magma", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "897854" },
                        { "id": 20, "nombre": "Tornado", "apellido": "Zapata", "email": "mrnice@gmail.com", "telefono": "2134545" }
                    ];
                }
                ClienteService.prototype.getClientes = function () {
                    return this.clientes;
                };
                ClienteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ClienteService);
                return ClienteService;
            }());
            exports_1("ClienteService", ClienteService);
        }
    }
});
//# sourceMappingURL=cliente.service.js.map