const express = require("express");
const experinentController = require("../controllers/experimentController");
const { param, body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", experinentController.getAllExperiments);

router.get("/short", experinentController.getAllExperimentsShort);

const uuidChain = () =>
  param("experimentId")
    .trim()
    .isUUID()
    .withMessage("Неверный UUID идентификатор");
router.get("/:experimentId", uuidChain(), async (req, res) => {
  try {
    validationResult(req).throw();
    await experinentController.getOneExperiment(req, res);
  } catch (e) {
    res.status(400).json({ errors: e.mapped() });
  }
});

const titleChain = () =>
  body("title").trim().notEmpty().withMessage("Поле title обязательно");
const commentsChain = () =>
  body("comments").trim().notEmpty().withMessage("Поле comments обязательно");
const startTimeChain = () =>
  body("start_time")
    .trim()
    .notEmpty()
    .withMessage("Поле start_time обязательно")
    .isISO8601()
    .withMessage("Поле start_time должно быть в формате ISO 8601");
const spatialResChain = () =>
  body("spatial_res")
    .trim()
    .notEmpty()
    .withMessage("Поле spatial_res обязательно")
    .isFloat({ min: 1500, max: 1912.5 })
    .withMessage("Поле 1500.0<= spatial_res <=1912.5");
const accumTimeChain = () =>
  body("accum_time")
    .trim()
    .notEmpty()
    .withMessage("Поле accum_time обязательно")
    .isInt({ min: 1, max: 240 })
    .withMessage("Поле 1<= accum_time <=240");
const arrayDatChain = () =>
  body("dat")
    .trim()
    .notEmpty()
    .withMessage("Поле dat обязательно")
    .isArray()
    .withMessage("Поле dat должно быть массивом");
const arrayDakChain = () =>
  body("dak")
    .trim()
    .notEmpty()
    .withMessage("Поле dak обязательно")
    .isArray()
    .withMessage("Поле dak должно быть массивом");
const molecularDataChain = () =>
  body("molecular_data")
    .notEmpty()
    .withMessage("Поле molecular_data обязательно")
    .isObject()
    .withMessage("Поле molecular_data должно быть объектом");
router.post(
  "/",
  titleChain(),
  commentsChain(),
  startTimeChain(),
  spatialResChain(),
  accumTimeChain(),
  arrayDatChain(),
  arrayDakChain(),
  molecularDataChain(),
  async (req, res) => {
    try {
      console.log(req.body.start_time);
      validationResult(req).throw();
      await experinentController.createNewExperiment(req, res);
    } catch (e) {
      res.status(400).json({ errors: e.mapped() });
    }
  }
);

router.put("/:experimentId", uuidChain(), async (req, res) => {
  try {
    validationResult(req).throw();
    await experinentController.updateOneExperiment(req, res);
  } catch (e) {
    res.status(400).json({ errors: e.mapped() });
  }
});

router.delete("/:experimentId", uuidChain(), async (req, res) => {
  try {
    validationResult(req).throw();
    await experinentController.deleteOneExperiment(req, res);
  } catch (e) {
    res.status(400).json({ errors: e.mapped() });
  }
});

module.exports = router;
