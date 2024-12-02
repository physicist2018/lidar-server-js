const { v4: uuid } = require("uuid");
const ExperimrntModel = require("../models/experiment");

const getAllExperiments = async () => {
  const exp = new ExperimrntModel({
    Title: "Hello",
    Comments: "Hello",
    MolecularModel: {},
    ProfileDat: [{}],
    ProfileDak: [{}],
  });
  exp.save().then((res) => {
    console.log(res);
  });
  // Experiment.run().then((result) => {
  //   console.log(result);
  //   return result;
  // });
};

const getOneExperiment = async (id) => {
  const cn = await conn;
  const res = await r.table("Experiment").get(id).run(cn);
  return res;
};

const createNewExperiment = async (newExperiment) => {
  const exper = new Experiment(newExperiment);
  exper.save().then((result) => {
    return result;
  });
};

const updateOneExperiment = async (experimentId, changes) => {
  const cn = await conn;
  const res = await r
    .table("Experiment")
    .get(experimentId)
    .update(changes)
    .run(cn);
  return res;
};

const deleteOneExperiment = async (experimentId) => {
  const cn = await conn;
  const res = await r.table("Experiment").get(experimentId).delete().run(cn);
  return res;
};

module.exports = {
  getAllExperiments,
  getOneExperiment,
  createNewExperiment,
  updateOneExperiment,
  deleteOneExperiment,
};
