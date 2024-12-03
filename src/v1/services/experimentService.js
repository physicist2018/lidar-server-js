const { v4: uuid } = require("uuid");
const r = require("rethinkdb");
const ExperimrentModel = require("../models/experiment");
const MolecularModel = require("../models/molecular_profile_model");

const getAllExperiments = async (rdb) => {
  const res = r
    .table("Experiment")
    .run(rdb)
    .then((items) => {
      console.log(items);
      const exp_objs = items.map((it) => {
        return new ExperimentModel(it);
      });
      return exp_objs;
    });
  return res;
};

const getOneExperiment = async (rdb, id) => {
  const exp = r
    .table("Experiment")
    .get(id)
    .run(rdb)
    .then((res) => {
      const exp = new ExperimrntModel(res);
      return exp;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
  return exp;
};

const createNewExperiment = async (newExperiment) => {
  const exper = new Experiment(newExperiment);
  exper.save().then((result) => {
    return result;
  });
};

const updateOneExperiment = async (rdb, experimentId, changes) => {
  const upd = r
    .table("Experiment")
    .get(experimentId)
    .update(changes)
    .run(rdb)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});

  return upd;
};

const deleteOneExperiment = async (rdb, experimentId) => {
  const dlt = r
    .table("Experimnent")
    .get(experimentId)
    .delete()
    .run(rdb)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});

  return dlt;
};

module.exports = {
  getAllExperiments,
  getOneExperiment,
  createNewExperiment,
  updateOneExperiment,
  deleteOneExperiment,
};
