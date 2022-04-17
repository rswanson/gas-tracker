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
exports.GasService = void 0;
var common_1 = require('@nestjs/common');
var rxjs_1 = require('rxjs');
var GasService = /** @class */ (function () {
  function GasService(httpService) {
    this.httpService = httpService;
  }
  GasService.prototype.getPrice = function () {
    this.price = this.getGasInfo().pipe(
      (0, rxjs_1.map)(function (response) {
        return response.data;
      })
    );
    return this.price;
  };
  GasService.prototype.getGasInfo = function () {
    var requestURL =
      'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' +
      process.env.ETHERSCAN_API_KEY;
    return this.httpService.get(requestURL);
  };
  GasService = __decorate([(0, common_1.Injectable)()], GasService);
  return GasService;
})();
exports.GasService = GasService;
