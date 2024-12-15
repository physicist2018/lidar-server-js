const { v4: uuid } = require("uuid");

class ResultScatteringRatio {
  constructor({ id, reference_alt, reference_value, background_alt, profile }) {
    this.id = id || uuid();
    this.reference_alt = reference_alt || 30000.0;
    this.reference_value = reference_value || 1.01;
    this.background_alt = background_alt || 80000.0;
    this.profile = profile || [];
  }

  static fromArray(array) {
    const objs = array.map(function (it) {
      return new ResultScatteringRatio(it);
    });
    return objs;
  }
}

module.exports = {
  ResultScatteringRatio,
};
