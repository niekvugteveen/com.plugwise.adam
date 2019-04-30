'use strict';

const Homey = require('homey');
const PlugwiseThermostatDevice = require('../../lib/PlugwiseThermostatDevice');

module.exports = class PlugwiseAnnaDevice extends PlugwiseThermostatDevice {
	
	onPoll({ appliance }) {
  	super.onPoll({ appliance });
  }
	
}