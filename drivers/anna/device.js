'use strict';

const Homey = require('homey');
const PlugwiseThermostatDevice = require('../../lib/PlugwiseThermostatDevice');

module.exports = class PlugwiseAnnaDevice extends PlugwiseThermostatDevice {
  
  onInit(...props) {
    super.onInit(...props);   
  	
    this.registerCapabilityListener('location_preset', this.onCapabilityLocationPreset.bind(this));
  }
	
	onPoll({ appliance }) {
  	super.onPoll({ appliance });
  }

  async onCapabilityLocationPreset( value ) {
    this.log('onCapabilityLocationPreset', value);
    const { applianceId } = this;
    
    return this.bridge.setPreset({
      applianceId,
      preset: value,
    });
    
    /*
    const rules = await this.bridge.getRules();
    console.log('rules', rules);
    
    return;
    
    
    const { locationId } = this;
    console.log({ locationId })
    const preset = value;
    return this.bridge.setPreset({ locationId, preset });
    */
  }
	
}