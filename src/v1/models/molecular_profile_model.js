class MolecularProfile {
  constructor(lat = 43.1, lon = 131.9) {
    this.lat = lat;
    this.lon = lon;
    this.alt = new Float64Array();
    this.rho = new Float64Array();
  }
}
