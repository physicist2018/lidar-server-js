class MolecularModel {
  constructor({ lat, lon, alt, dens }) {
    this.lat = lat;
    this.lon = lon;
    this.alt = alt;
    this.density = dens;
  }
}

module.exports = MolecularModel;
