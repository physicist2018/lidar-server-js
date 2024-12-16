const express = require("express");
const experinentController = require("../controllers/experimentController");
const router = express.Router();

router.get("/", experinentController.getAllExperiments);

router.get("/:experimentId", experinentController.getOneExperiment);

router.post("/", experinentController.createNewExperiment);

router.put("/:experimentId", experinentController.updateOneExperiment);

router.delete("/:experimentId", experinentController.deleteOneExperiment);

module.exports = router;
