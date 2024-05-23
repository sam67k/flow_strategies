const express = require("express");
const router = express.Router();

// Controllers
const controller = require("../controllers/title");

router.get("/", controller.get);

module.exports = router;
