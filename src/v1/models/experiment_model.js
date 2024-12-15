const { v4: uuid } = require("uuid");
const { MeasurementModel } = require("./measurement_model");
const { MolecularModel } = require("./molecular_profile_model");

class ExperimentModel {
  constructor({
    id,
    title,
    comments,
    start_time,
    spatial_res,
    accum_time,
    dat,
    dak,
    molecular_data,
  }) {
    this.id = id || uuid();
    this.title = title || "no-title";
    this.comments = comments || "no-comments";
    this.start_time = new Date(start_time || Date.now());
    this.spatial_res = spatial_res || 1500.0;
    this.accum_time = accum_time || 10;
    this.dak = MeasurementModel.fromArray(dak || []);
    this.dat = MeasurementModel.fromArray(dat || []);
    this.molecular_data = new MolecularModel(molecular_data || {});
  }

  static fromArray(array) {
    const objs = array.map(function (it) {
      return new ExperimentModel(it);
    });
    return objs;
  }
}

module.exports = { ExperimentModel };
