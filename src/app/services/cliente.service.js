System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ClienteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ClienteService = (function () {
                function ClienteService(http) {
                    this.http = http;
                }
                ClienteService.prototype.getAll = function () {
                    return this.http.get('http://localhost:8080/cliente')
                        .map(function (response) { return response.json(); });
                };
                ClienteService.prototype.getById = function (id) {
                    return this.http.get('http://localhost:8080/person/' + id)
                        .map(function (res) { return res.json(); });
                };
                ClienteService.prototype.insert = function (cliente) {
                    return this.http.post('http://localhost:8080/person', cliente);
                };
                ClienteService.prototype.update = function (cliente) {
                    return this.http.put('http://localhost:8080/person/', cliente);
                };
                ClienteService.prototype.delete = function (id) {
                    return this.http.delete('http://localhost:8080/person/' + id);
                };
                ClienteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClienteService);
                return ClienteService;
            }());
            exports_1("ClienteService", ClienteService);
        }
    }
});
//# sourceMappingURL=cliente.service.js.map