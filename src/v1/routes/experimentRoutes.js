const express = require("express");
const experinentController = require("../controllers/experimentController");
const { param, body, validationResult } = require("express-validator");
const router = express.Router();

router.get("/", experinentController.getAllExperiments);

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
  body("title").trim().notEmpty().withMessage("Title is required");
const commentsChain = () =>
  body("comments").trim().notEmpty().withMessage("Comments is required");
const startTimeChain = () =>
  body("start_time")
    .trim()
    .notEmpty()
    .isDate()
    .withMessage("Start time is required");
router.post(
  "/",
  titleChain(),
  commentsChain(),
  startTimeChain(),
  async (req, res) => {
    try {
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
