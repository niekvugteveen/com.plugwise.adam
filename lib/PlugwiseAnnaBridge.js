'use strict';

const PlugwiseBridge = require('./PlugwiseBridge');

module.exports = class PlugwiseAnnaBridge extends PlugwiseBridge {
  
  static get PRODUCTS() {
    return [
      'smile_thermo',
    ];
  }
  
  async setPreset({ applianceId, preset }) {
    const locationId = await this.getApplianceLocationId({ applianceId });
    return super.setPreset({
      locationId,
      preset,
    });
  }
}