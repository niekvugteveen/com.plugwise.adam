'use strict';

const PlugwiseBridge = require('./PlugwiseBridge');

// This class is for Anna with firmware 1.x

module.exports = class PlugwiseAnnaBridgeLegacy extends PlugwiseBridge {
  
  static get PRODUCTS() {
    return [
      'smile-thermo',
    ];
  }

  async ping({ password } = {}) {
    return this._call({
      password,
      path: '/system',
    });
  }
  
  async setTargetTemperature({ applianceId, setpoint }) {
    const appliance = await this.getAppliance({ id: applianceId });
    const functionalityId = appliance.actuator_functionalities.thermostat_functionality.$attr.id;
    
    return this._call({
      method: 'put',
      path: `/core/appliances;id=${applianceId}/thermostat;id=${functionalityId}`,
      xml: `<thermostat_functionality><setpoint>${setpoint}</setpoint></thermostat_functionality>`,
    });
  }
}