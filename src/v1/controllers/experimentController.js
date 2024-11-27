const experiemtService = require('../services/experimentService')

const getAllExperiments = async (req, res) => {
    const allExperiments = await experiemtService.getAllExperiments()
    res.send({ status: 'OK', data: allExperiments })
}

const getOneExperiment = async (req, res) => {
    const {
        params: { experimentId }
    } = req

    if (!experimentId) {
        return;
    }
    const experiment = await experiemtService.getOneExperiment(experimentId)
    res.send({ status: 'OK', data: experiment })
}

const createNewExperiment = async (req, res) => {
    const { body } = req;
    if (
        !body.title ||
        !body.comments ||
        !body.exerimentTime ||
        !body.vertRes ||
        !body.accum
    ){
        return;
    }

    const newExperiment = {
        title: body.title,
        comments: body.comments,
        experimentTime: body.exerimentTime,
        vertRes: body.vertRes,
        accum: body.accum
    }

    const createdExperiment = await experiemtService.createNewExperiment(newExperiment)
    res.status(201).send({
        status:'OK',
        data: createdExperiment
    })
}

const updateOneExperiment = async (req, res) => {
    const {
        body,
        params: { experimentId },
    } = req;
    if (!experimentId) {
        return;
    }
    const updatedExperiment = workoutService.updateOneExperiment(
        experimentId,
        body
    );
    res.send({ status: 'OK', data: updatedExperiment });
}

module.exports = {
    getAllExperiments,
    getOneExperiment,
    updateOneExperiment,
    createNewExperiment
}