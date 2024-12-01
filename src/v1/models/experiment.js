const models = require(".");
var db = require("../../config/database");
var r = require("rethinkdb");

class Experiment {
  id = null;
  experiment_time = null;
  title = "";
  comments = "";
  vert_res = 1500.0;
  accum_time = 10; // in minutes

  profile_dak = null;
  profile_dat = null;
  profile_comb = null;
  molecular_prof = null;
  processed_data = null;

  constructor() {}

  static getExperimentById(rdb, id) {
    r.db(db.db)
      .table("Experiment")
      .get(id)
      .run(rdb)
      .then((result) => {
        let exp = new Experiment();
        exp.id = result.id;
        exp.experiment_time = result.experiment_time;
        exp.title = result.title;
        exp.comments = result.comments;
        return exp;
      })
      .catch((error) => {
        return null;
      });
  }
  process() {}
}

module.exports = {
  Experiment,
};
