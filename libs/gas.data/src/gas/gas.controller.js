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
exports.GasController = void 0;
var common_1 = require('@nestjs/common');
var GasController = /** @class */ (function () {
  function GasController(gasService, httpService) {
    this.gasService = gasService;
    this.httpService = httpService;
  }
  GasController.prototype.getEtherScanGasPrice = function () {
    return this.gasService.getPrice();
  };
  GasController.prototype.getMetrics = function () {
    return { message: 'this is fine' };
  };
  __decorate(
    [(0, common_1.Get)('/etherscan')],
    GasController.prototype,
    'getEtherScanGasPrice'
  );
  __decorate(
    [(0, common_1.Get)('/metrics')],
    GasController.prototype,
    'getMetrics'
  );
  GasController = __decorate([(0, common_1.Controller)('/gas')], GasController);
  return GasController;
})();
exports.GasController = GasController;
