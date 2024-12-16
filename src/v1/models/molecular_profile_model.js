class MolecularModel {
  constructor({ latitude, longitude, altitude, density }) {
    this.latitude = latitude || 43.1;
    this.longitude = longitude || 131.9;
    this.altitude = altitude || [];
    this.density = density || [];
  }
}

module.exports = { MolecularModel };
