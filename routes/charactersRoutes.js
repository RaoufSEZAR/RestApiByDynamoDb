const express = require("express");
const charactersController = require("../controllers/charactersControllers");

const router = express.Router();

router.route("/").get(charactersController.getCharacters);
router.route("/:id").get(charactersController.getCharacterById);
router.route("/").post(charactersController.createCharacter);
router.route("/:id").put(charactersController.updatedCharacter);
router.route("/:id").delete(charactersController.deleteCharacterById);

module.exports = router;
