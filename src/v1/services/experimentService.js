const { v4: uuid } = require("uuid");
const r = require("rethinkdb");
const config = require("../../config/database");
const { ExperimentModel } = require("../models");

const getAllExperimentsShort = (rdb) => {
  const res = r
    .table(config.table)
    .pluck("id")
    .run(rdb)
    .then((items) => items.toArray())
    // .then((arr) => ExperimentModel.fromArray(arr))
    .catch((err) => null);

  return res;
};

const getAllExperiments = (rdb) => {
  const res = r
    .table(config.table)
    .run(rdb)
    .then((items) => {
      return items.toArray();
    })
    .then((arr) => {
      //console.log(arr);
      return ExperimentModel.fromArray(arr);
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
      const exp = new ExperimentModel(res || { id: id });
      return exp;
    })
    .catch((err) => {
      console.log(err);
      return new ExperimentModel({});
    })
    .finally(() => {});
  return exp;
};

const createNewExperiment = (rdb, newExperiment) => {
  const exper = new ExperimentModel(newExperiment);
  console.log(exper);
  const ret = r
    .table(config.table)
    .insert(exper)
    .run(rdb)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return ret;
};

const updateOneExperiment = async (rdb, experimentId, changes) => {
  const upd = r
    .table(config.table)
    .get(experimentId)
    .update(changes)
    .run(rdb)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    })
    .finally(() => {});

  return upd;
};

const deleteOneExperiment = async (rdb, experimentId) => {
  const dlt = r
    .table(config.table)
    .get(experimentId)
    .delete()
    .run(rdb)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return { err: err };
    })
    .finally(() => {});

  return dlt;
};

module.exports = {
  getAllExperiments,
  getAllExperimentsShort,
  getOneExperiment,
  createNewExperiment,
  updateOneExperiment,
  deleteOneExperiment,
};
