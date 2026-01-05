import { ShellyPlusRGBWPM } from 'shellies-ds9';
import { DeviceDelegate } from './base';

/**
 * Handles Shelly Plus RGBW PM devices.
 *
 * Exposes each channel as a HomeKit Lightbulb
 * with brightness, color, and power metering.
 */
export class ShellyPlusRgbwPmDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as ShellyPlusRGBWPM;

    // RGBW PM has up to 4 controllable channels
    if (d.light0) this.addLight(d.light0);
    if (d.light1) this.addLight(d.light1);
    if (d.light2) this.addLight(d.light2);
    if (d.light3) this.addLight(d.light3);
  }
}

// Register delegate for this Shelly model
DeviceDelegate.registerDelegate(
  ShellyPlusRgbwPmDelegate,
  ShellyPlusRGBWPM,
);
