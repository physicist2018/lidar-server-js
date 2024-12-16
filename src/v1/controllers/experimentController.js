const experiemtService = require("../services/experimentService");
var { StatusCodes } = require("http-status-codes");

const getAllExperiments = async (req, res) => {
  const allExperiments = await experiemtService.getAllExperiments(req._rdb);
  res.status(StatusCodes.OK).json(allExperiments);
};

const getOneExperiment = async (req, res) => {
  const {
    params: { experimentId },
  } = req;

  if (!experimentId) {
    return;
  }
  const experiment = await experiemtService.getOneExperiment(
    req._rdb,
    experimentId
  );

  res.status(StatusCodes.OK).json(experiment);
};

const createNewExperiment = async (req, res) => {
  const { body } = req;
  //   if (
  //     !body.title ||
  //     !body.comments ||
  //     !body.exerimentTime ||
  //     !body.vertRes ||
  //     !body.accum
  //   ) {
  //     return;
  //   }

  const newExperiment = {
    ...body,
  };

  const createdExperiment = await experiemtService.createNewExperiment(
    req._rdb,
    newExperiment
  );
  res.status(StatusCodes.CREATED).json(createdExperiment);
};

const updateOneExperiment = async (req, res) => {
  const {
    body,
    params: { experimentId },
  } = req;
  if (!experimentId) {
    return;
  }
  const updatedExperiment = await experiemtService.updateOneExperiment(
    req._rdb,
    experimentId,
    body
  );
  res.status(StatusCodes.OK).json(updatedExperiment);
};

const deleteOneExperiment = async (req, res) => {
  const {
    params: { experimentId },
  } = req;

  console.log(experimentId);
  if (!experimentId) {
    return;
  }
  const experiment = await experiemtService.deleteOneExperiment(
    req._rdb,
    experimentId
  );
  res.status(StatusCodes.OK).json(experiment);
};

module.exports = {
  getAllExperiments,
  getOneExperiment,
  updateOneExperiment,
  createNewExperiment,
  deleteOneExperiment,
};
