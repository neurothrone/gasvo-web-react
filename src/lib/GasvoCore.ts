class GasvoCore {
  static gasPressureConstant: number = 1013.0;

  static getInnerRadius(nps: number): number {
    return (nps / 1000.0) / 2.0;
  }

  static calculateGasVolume(nps: number, length: number, pressure: number): number {
    // Formula: (PI * radius^2 m) * length m * ((pressure + constant) mb / constant mb) = gasVolume m^3
    const innerRadius = this.getInnerRadius(nps);
    return (Math.PI * (Math.pow(innerRadius, 2)) * length * ((pressure + this.gasPressureConstant) / this.gasPressureConstant));
  }
}

export default GasvoCore;