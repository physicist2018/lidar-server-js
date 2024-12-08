const { v4: uuid } = require("uuid");
const r = require("rethinkdb");
const config = require("../../config/database");
const MolecularModel = require("../models/molecular_profile_model");
const ExperimentModel = require("../models/experiment");

const getAllExperiments = async (rdb) => {
  const res = r
    .table(config.table)
    .run(rdb)
    .then((items) => {
      return items.toArray();
    })
    .then((arr) => {
      //console.log(arr);
      const exp_objs = ExperimentModel.fromArray(arr);

      return exp_objs;
    })
    .catch((err) => {
      return null;
    });
  return res;
};

const getOneExperiment = async (rdb, id) => {
  const exp = r
    .table(config.table)
    .get(id)
    .run(rdb)
    .then((res) => {
      const exp = new ExperimentModel(res);
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
