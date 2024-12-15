const { v4: uuid } = require("uuid");
const { ResultScattterinRatio } = require("./result_scattering_model");

class MeasurementModel {
  constructor({
    id,
    start_time,
    repetition_rate,
    wavelength,
    profile_length,
    profile_count,
    data,
    result_scattering_ratio,
  }) {
    this.id = id || uuid();
    this.start_time = new Date(start_time || Date.now());
    this.repetition_rate = repetition_rate || 10;
    this.wavelength = wavelength || 532.0;
    this.profile_length = profile_length || 512;
    this.profile_count = profile_count || 1;
    this.data = data || [];
    this.result_scattering_ratio = new ResultScattterinRatio(
      result_scattering_ratio || {}
    );
  }

  static fromArray(array) {
    const objs = array.map(function (it) {
      return new MeasurementModel(it);
    });
    return objs;
  }
}

module.exports = {
  MeasurementModel,
};
