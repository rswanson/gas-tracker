'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.GasDataModule = void 0;
var common_1 = require('@nestjs/common');
var config_1 = require('@nestjs/config');
var axios_1 = require('@nestjs/axios');
var gas_service_1 = require('../gas/gas.service');
var gas_controller_1 = require('../gas/gas.controller');
var GasDataModule = /** @class */ (function () {
  function GasDataModule(httpService) {
    this.httpService = httpService;
  }
  GasDataModule = __decorate(
    [
      (0, common_1.Module)({
        controllers: [gas_controller_1.GasController],
        providers: [gas_service_1.GasService],
        exports: [],
        imports: [
          axios_1.HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
          }),
          config_1.ConfigModule.forRoot(),
        ],
      }),
      (0, common_1.Injectable)(),
    ],
    GasDataModule
  );
  return GasDataModule;
})();
exports.GasDataModule = GasDataModule;
