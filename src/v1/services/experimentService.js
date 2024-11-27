const { v4: uuid } = require('uuid');
const { r, conn } = require('../../database')

const getAllExperiments = async () => {
    const cn = await conn;
    const res = await r.table('Experiment').run(cn)
    return res.toArray();
}

const getOneExperiment = async (id) => {
    const cn = await conn;
    const res = await r.table('Experiment').get(id).run(cn)
    return res
}

const createNewExperiment = async (newExperiment) => {
    const experimentToInsert = {
        ...newExperiment,
        id: uuid(),
        createdAt: new Date().toLocaleString('ru-RU', {
            timeZone: 'UTC',
        }),
        createdAt: new Date().toLocaleString('ru-RU', {
            timeZone: 'UTC',
        })
    }
    const cn = await conn;
    const res = await r.table('Experiment').insert(experimentToInsert).run(cn)
    return res;
}

const updateOneExperiment = async (experimentId, changes) => {
    const cn = await conn;
    const res = await r.table('Experiment').get(experimentId).update(changes).run(cn)
    return res;
}

const deleteOneExperiment = () => {
    return
}

module.exports = {
    getAllExperiments,
    getOneExperiment,
    createNewExperiment,
    updateOneExperiment,
    deleteOneExperiment
}