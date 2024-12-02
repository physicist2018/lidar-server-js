const thinky = require("../../utils/thinky");
const MolecularModel = require("./molecular_profile_model");
const type = thinky.type;

const ExperimrntModel = thinky.createModel("Experiment", {
  id: type.string(),
  Title: type.string(),
  Comments: type.string(),
  MolecularModel: type.object(),
  ProfileDat: [type.object()],
  ProfileDak: [type.object()],
});

module.exports = ExperimrntModel;
