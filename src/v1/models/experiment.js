//const thinky = require("../../utils/thinky");
const MolecularModel = require("./molecular_profile_model");
//const type = thinky.type;

class ExperimrntModel {
  constructor({
    title,
    comments,
    experiment_date,
    profile_dat,
    profile_dak,
    profile_comb,
    moldecular_model,
  }) {
    this.Title = title || "no-title";
    this.Comments = comments || "no-comments";
    this.ExperimetDate = experiment_date || Date.now();
    this.ProfileDat = profile_dat || [];
    this.ProfileDak = profile_dak || [];
    this.ProfileCmb = profile_comb || [];
    this.MolecularModel = moldecular_model || {};
  }
}

module.exports = ExperimrntModel;
