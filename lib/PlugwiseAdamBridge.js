'use strict';

const PlugwiseBridge = require('./PlugwiseBridge');

module.exports = class PlugwiseAdamBridge extends PlugwiseBridge {
  
  static get PRODUCTS() {
    return [ 'smile_open_therm' ];
  }
  
}