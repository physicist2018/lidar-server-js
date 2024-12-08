class MolecularModel {
  constructor({ lat, lon, alt, dens }) {
    this.lat = lat || 43.1;
    this.lon = lon || 131.9;
    this.alt = alt || [1, 2, 3, 4];
    this.density = dens || [1, 2, 3, 4];
  }
}

module.exports = MolecularModel;
