class MolecularModel {
  constructor({ lat, lon, alt, dens }) {
    this.latitude = lat || 43.1;
    this.longitude = lon || 131.9;
    this.altitude = alt || [];
    this.density = dens || [];
  }
}

module.exports = { MolecularModel };
