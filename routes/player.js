const express = require("express");

const playerController = require("../controllers/player");

const router = express.Router();

router.get("/get-player/", playerController.getPlayer);

router.post("/add-player", playerController.addPlayer);

router.delete("/edit-player/:id", playerController.editPlayer);

module.exports = router;