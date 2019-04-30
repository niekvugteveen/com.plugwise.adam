'use strict';

const PlugwiseBridge = require('./PlugwiseBridge');

module.exports = class PlugwiseAnnaBridge extends PlugwiseBridge {
  
  static get PRODUCTS() {
    return [
      'smile_thermo',
    ];
  }
}