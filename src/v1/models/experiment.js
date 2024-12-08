//const thinky = require("../../utils/thinky");
const MolecularModel = require("./molecular_profile_model");
//const type = thinky.type;

class ExperimentModel {
  constructor({
    id,
    title,
    comments,
    start_time,
    dat,
    dak,
    profile_comb,
    molecular_model,
  }) {
    this.id = id || "0";
    this.Title = title || "no-title";
    this.Comments = comments || "no-comments";
    this.StartTime = new Date(start_time) || Date.now();
    this.ProfileDat = dat || [];
    this.ProfileDak = dak || [];
    this.ProfileCmb = profile_comb || [];
    if (molecular_model === undefined) {
      this.MolecularModel = new MolecularModel({});
    } else {
      this.MolecularModel = new MolecularModel(molecular_model);
    }
    //this.MolecularModel = new MolecularModel(molecular_model) || {};
    //console.log(molecular_model);
  }

  static fromArray(array) {
    const objs = array.map(function (it) {
      return new ExperimentModel(it);
    });
    return objs;
  }
}

module.exports = ExperimentModel;
